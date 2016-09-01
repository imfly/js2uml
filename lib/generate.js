var plantuml = require('node-plantuml');
var fs = require('fs');

function Generate(puml, options) {
    var gen = plantuml.generate(puml, {
        output: options.output
    });

    gen.out.pipe(fs.createWriteStream(options.output));    
}

module.exports = Generate;
