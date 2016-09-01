#! /usr/bin/env node

var program = require("commander");
var color = require('bash-color');
var _ = require('ramda');

var pkg = require("../package.json");
var config = require('../lib/config.js');
var Js2uml = require("../lib/");

function clone(from, to) {
    for (key in to) {
        if (from[key]) {
            to[key] = from[key];
        };
    }
}

program
    .version(pkg.version)
    .option("-s, --sourceFile <string>", "sourceFile path, required")
    .option("-b, --borderColor [string]", "border color, default is `#blue\9932CC`")
    .option("-f, --footer [string]", "The uml's footer description.")
    .option("-g, --backgroundcolor [string]", "background color, default is `AntiqueWhite/white`")
    .option("-h, --header [string]", "The uml's header description.")
    .option("-o, --output [string]", "output file")
    .option("-t, --title [string]", "The uml's title.")
    .parse(process.argv);

clone(program, config);

Js2uml(config);
