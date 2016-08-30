var async = require('async');
var	sandboxHelper = require('../helpers/sandbox.js');

var modules, library, self, privated = {}, shared = {};

privated.launched = {};
privated.unconfirmedOutTansfers = {};

function isASCII(str, extended) {
	return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(str);
}

function OutTransfer() {
	this.create = function (data, trs) {
		trs.recipientId = data.recipientId;
		trs.amount = data.amount;

		trs.asset.outTransfer = {
			dappId: data.dappId,
			transactionId: data.transactionId
		};

		return trs;
	}

	this.calculateFee = function (trs, sender) {
		return library.logic.block.calculateFee();
	}
}

// Constructor
function DApps(cb, scope) {
	library = scope;
	self = this;
	self.__private = privated;
	library.logic.transaction.attachAssetType(TransactionTypes.DAPP, new DApp());
	library.logic.transaction.attachAssetType(TransactionTypes.IN_TRANSFER, new InTransfer());
	library.logic.transaction.attachAssetType(TransactionTypes.OUT_TRANSFER, new OutTransfer());

	fs.exists(path.join('.', 'public', 'dapps'), function (exists) {
		if (exists) {
			rmdir(path.join('.', 'public', 'dapps'), function (err) {
				if (err) {
					library.logger.error(err);
				}

				privated.createBasePathes(function (err) {
					setImmediate(cb, err, self);
				});
			})
		} else {
			privated.createBasePathes(function (err) {
				setImmediate(cb, null, self);
			});
		}
	});

}

privated.attachApi = function () {
	var router = new Router();

	router.get('/siaenabled', function (req, res, next) {
		return res.json({success: true, enabled: !!library.config.sia.peer});
	})

	library.network.app.use('/api/dapps', router);
	library.network.app.use(function (err, req, res, next) {
		if (!err) return next();
		library.logger.error(req.url, err.toString());
		res.status(500).send({success: false, error: err.toString()});
	});
}

// private methods
privated.get = function (id, cb) {
	library.dbLite.query("SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId = $id", {id: id}, ['name', 'description', 'tags', 'siaAscii', 'siaIcon', 'git', 'type', 'category', 'icon', 'transactionId'], function (err, rows) {
		if (err || rows.length == 0) {
			return setImmediate(cb, err ? "Database error" : "DApp not found");
		}

		return setImmediate(cb, null, rows[0]);
	});
}

privated.getByIds = function (ids, cb) {
	for (var i = 0; i < ids.length; i++) {
		ids[i] = "'" + ids[i] + "'";
	}

	library.dbLite.query("SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId IN (" + ids.join(',') + ")", {}, ['name', 'description', 'tags', 'siaAscii', 'siaIcon', 'git', 'type', 'category', 'icon', 'transactionId'], function (err, rows) {
		if (err) {
			return setImmediate(cb, err ? "Database error" : "DApp not found");
		}

		return setImmediate(cb, null, rows);
	});
}

privated.downloadSiaFile = function (id, ascii, icon, path, cb) {
	modules.sia.uploadAscii(id, ascii, icon, function (err, file) {
		if (err) {
			return setImmediate(cb, err);
		} else {
			modules.sia.download(file, path, cb);
		}
	});
}

// Public methods
DApps.prototype.message = function (dappid, body, cb) {
	self.request(dappid, "post", "/message", body, cb);
}

// Events
DApps.prototype.onBind = function (scope) {
	modules = scope;
}

DApps.prototype.onBlockchainReady = function () {
	if (library.config.dapp) {
		async.eachSeries(library.config.dapp.autoexec || [], function (dapp, cb) {
			privated.launch({
				params: dapp.params,
				id: dapp.dappid,
				master: library.config.dapp.masterpassword
			}, function (err) {
				console.log("Launched " + dapp.dappid, err || "successfully")
				cb();
			});
		});
	}
}

DApps.prototype.onNewBlock = function (block, broadcast) {
	Object.keys(privated.sandboxes).forEach(function (dappId) {
		broadcast && self.request(dappId, "post", "/message", {
			topic: "point",
			message: {id: block.id, height: block.height}
		}, function (err) {
			if (err) {
				library.logger.error("onNewBlock message", err)
			}
		});
	});
}

// Shared
shared.getGenesis = function (req, cb) {
	library.dbLite.query("SELECT b.height, b.id, GROUP_CONCAT(m.dependentId), t.senderId FROM trs t " +
		"inner join blocks b on t.blockId = b.id and t.id = $id " +
		"left outer join mem_accounts2multisignatures m on m.accountId = t.senderId and t.id = $id", {id: req.dappid}, {
		height: Number,
		id: String,
		multisignature: String,
		authorId: String
	}, function (err, rows) {
		if (err || rows.length == 0) {
			return cb("Database error");
		}

		cb(null, {
			pointId: rows[0].id,
			pointHeight: rows[0].height,
			authorId: rows[0].authorId,
			dappid: req.dappid,
			associate: rows[0].multisignature ? rows[0].multisignature.split(",") : []
		});
	});
}

shared.setReady = function (req, cb) {
	privated.dappready[req.dappid] = true;
	cb(null, {});
}

module.exports = DApps;
