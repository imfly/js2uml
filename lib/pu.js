var fs = require('fs');
var _ = require('ramda');
var Task = require('data.task');
var color = require('bash-color');
var esprima = require('esprima');
var estraverse = require('estraverse');

var template = require('./template.js');

var sourceFile = './test/dapps.js';
var targetFile = './test/dapps.pu';

// read : String -> Task(Error, Buffer)
function read(path) {
    return new Task(function(reject, resolve) {
        fs.readFile(path, 'utf8', function(error, data) {
            if (error) reject(error)
            else resolve(data)
        })
    })
}

// decode : Task(Error, Buffer) -> Task(Error, String)
function decode(buffer) {
    return buffer.map(function(a) {
        return a.toString('utf-8')
    })
}

//
var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
});

var match = _.curry(function(what, str) {
    // console.log(str.match(what));
    return str.match(what);
});

var filter = _.curry(function(f, ary) {
    return _.map(f, ary);
});

var replace = _.curry(function(r, s, str) {
    // console.log(str.replace(r, s));
    return str.replace(r, s);
})

var pattern = _.curry(function(pattern, str) {
    var p = new RegExp(str + pattern, 'g');
    return p;
})

var write = _.curry(function(path, data, cb) {
    fs.writeFile(path, data, cb);
})

var getFile = _.compose(decode, read);

// 执行
var setPattern = pattern("\\.(.*) *= *function *(\\(.*\\))");

var getMethods = function(scope, data) {
    var patten = setPattern(scope);
    var methods = match(patten);
    var str = scope === "privated" ? '    - $1: $2' : '    + $1: $2'
    var format = replace(patten, str);

    return methods(data).map(format).join('\n');
}

var getPublicMethods = function(data) {
    var patten = /([A-Z][a-zA-Z]*).prototype.([a-zA-Z]*) = function (\(.*\))/g;
    var methods = match(patten);
    var format = replace(patten, '    + $2: $3');

    // todo: if methods(data) === null throw error;
    return methods(data).map(format).join('\n');
}

var getClassName = function(data) {
    var patten = /module.exports = ([A-Za-z]*)/;
    var classNames = match(patten);

    // todo: if null
    return classNames(data)[1];
}

var formatData = function(data) {
    var privateMethods = getMethods('privated', data);
    var sharedMethods = getMethods('shared', data);
    var formatData = "";

    formatData += "    .. private methods ..\n" + privateMethods + "\n\n";
    formatData += "    .. public methods ..\n" + getPublicMethods(data) + "\n\n";
    formatData += "    .. public Api(shared) ..\n" + sharedMethods;

    return formatData;
};

var getClass = function(data) {
    var result = "";
    result += "Class ";
    result += getClassName(data) + "{ \n";
    result += formatData(data);
    result += "\n } \n";

    return result;
};

// exec
getFile(sourceFile).fork(
    function(error) {
        throw error;
    },

    function(data) {
        var d = getClass(data);
        var ast = esprima.parse(data);
        var formatD = [];
        estraverse.traverse(ast, {
            enter: function(node, parent) {
                if (node.type == 'FunctionDeclaration') {
                  var obj = {};
                  obj[node.id.name] = node.type;
                  console.log(node.id.name);
                  formatD.push(obj);
                }
            }
        });

        var d = JSON.stringify(formatD, null, 4);

        var setFile = write(targetFile);
        setFile(d, function() {
            console.log(color.green('Saved!'));
        });
    }
)
