var fs = require('fs');
var _ = require('ramda');
var Task = require('data.task');
var color = require('bash-color');
var esprima = require('esprima');
var estraverse = require('estraverse');

var parser = require('./parser.js');
var read = require('./read.js');
var template = require('./template.js');

var sourceFile = './test/dapps.js';
var targetFile = './test/dapps.pu';

var write = _.curry(function(path, data, cb) {
    fs.writeFile(path, data, cb);
})

read(sourceFile).fork(
  function (error) {
    console.log(error);
    throw error;
  },

  function (data) {
    var functionList = parser(data);
    var formatD = JSON.stringify(functionList, null, 4);

    var setFile = write(targetFile);
    setFile(formatD, function() {
        console.log(color.green('Saved!'));
    });
  }

)
