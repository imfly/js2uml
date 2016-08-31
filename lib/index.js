var fs = require('fs');
var _ = require('ramda');
var color = require('bash-color');

var parser = require('./parser.js');
var read = require('./read.js');
var template = require('./template.js');
var format = require('./format.js');
var config = require('./config.js');

var sourceFile = './test/dapps.js';
var targetFile = './test/dapps.pu';

var write = _.curry(function(path, data, cb) {
    fs.writeFile(path, data, cb);
})

function Js2uml(options) {
    // sourceFile = options.sourceFile || config.sourceFile
    // targetFile = options.targetFile || config.targetFile;
console.log("hello");
    read(sourceFile).fork(
        function(error) {
            console.log(error);
            throw error;
        },

        // var esprima = require('esprima');
        function(data) {
            // var tree = esprima.parse(data);
            var functionList = parser(data);
            // var formatD = JSON.stringify(functionList, null, 4);
            var formatData = format(functionList);
            var result = template(formatData);

            var setFile = write(targetFile);
            setFile(result, function() {
                console.log(color.green("It's ok!"));
            });
        }
    )
}

module.exports = Js2uml;
