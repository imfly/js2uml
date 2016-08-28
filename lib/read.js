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

var getFile = _.compose(decode, read);

module.exports = getFile;
