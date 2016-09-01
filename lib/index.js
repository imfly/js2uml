var fs = require('fs');
var _ = require('ramda');
var color = require('bash-color');

var parser = require('./parser.js');
var read = require('./read.js');
var template = require('./template.js');
var format = require('./format.js');
var generate = require('./generate.js');

var getPuml = _.compose(template, format, parser);

var write = _.curry(function(path, data, cb) {
    fs.writeFile(path, data, cb);
})

function Js2uml(options) {

    read(options.sourceFile).fork(
        function(error) {
            console.log(color.red("Error: The source file does not exist. Please give the source file by '-s' option."));
            process.exit(1);
            return;
        },

        function(data) {
            // var formatD = JSON.stringify(functionList, null, 4);
            var puml = getPuml(data);
            
            if (_.test(/.pu/, options.output)) {
                var setFile = write(options.output);
                setFile(puml, function() {
                    console.log(color.green("It's ok. The " + options.output + " has been generated!"));
                });
            } else {
                generate(puml, options);
                console.log(color.green("It's ok. The " + options.output + " has been generated!"));
            }
        }
    )
}

module.exports = Js2uml;
