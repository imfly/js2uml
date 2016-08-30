#! /usr/bin/env node

var program = require("commander");
var color = require('bash-color');

var pkg = require("../package.json");
var js2pu = require("../lib/")

function list(val) {
  return val.split(',');
}

program
  .version(pkg.version)

program
  .command("js2uml")
  .description("Generate a UML from a js file")
  .option("-r, --root [string]", "root folder, default is `.`")
  .option("-o, --outputfile [string]", "output file, defaut is `./methodName.pu`")
  .action(function(options) {
      summary(options);
  });

// Parse and fallback to help if no args
if (typeof(program.parse(process.argv).args) === "undefined" && process.argv.length === 2) {
  program.help();
}
