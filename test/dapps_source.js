var async = require('async');
var	sandboxHelper = require('../helpers/sandbox.js');

var modules, library, self, privated = {}, shared = {};

privated.launched = {};
privated.unconfirmedOutTansfers = {};

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

module.exports = DApps;
