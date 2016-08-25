var fs = require('fs');
var _ = require('ramda');
var Task = require('data.task');
var color = require('bash-color');

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

var file = function(file) {
    return file;
};

var match = _.curry(function(what, str) {
    // console.log(str.match(what));
    return str.match(what);
});

var filter = _.curry(function(f, ary) {
    return _.map(f, ary);
});

var replace = _.curry(function(r, s, str) {
    return str.replace(r, s)
})

var pattern = _.curry(function(pattern, str) {
    var p = new RegExp(str + pattern, 'g');
    return p;
})

var write = _.curry(function(path, data, cb) {
    fs.writeFile(path, data, cb);
})

var getFile = _.compose(decode, read, file);

// 执行
var setPattern = pattern(".([a-zA-Z]*) = function (\(.*\))");

var getMethods = function(scope, data) {
    var patten = setPattern(scope);
    var methods = match(patten);
    var format = replace(patten, '- $1: $2');

    return methods(data).map(format);
}

var getPublicMethods = function(data) {
    var patten = /([A-Z][a-zA-Z]*).prototype.([a-zA-Z]*) = function (\(.*\))/g;
    var methods = match(patten);
    var format = replace(patten, '+ $2: $3');

    return methods(data).map(format);
}

// exec
getFile('./test/dapps.js').fork(
    function(error) {
        throw error
    },

    function(data) {
        var privateMethods = getMethods('privated', data); //privates(data).map(privatedReplace);
        var sharedMethods = getMethods('shared', data); //shared(data).map(sharedReplace);

        formatData = "' private method \n" + privateMethods.join('\n') + "\n\n" + "' shared method \n" + sharedMethods.join('\n') + "\n\n" + "' public methods \n" + getPublicMethods(data).join('\n');

        var setFile = write('./test/dapps.pu');
        setFile(formatData, function() {
            console.log(color.green('Saved!'));
        });
    }
)
