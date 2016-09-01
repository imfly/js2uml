var config = require('./config.js');

function Template(data) {
    var uml = "";
    uml += "@startuml \n";
    uml += "skinparam BorderColor " + config.borderColor + " \n";
    uml += "skinparam backgroundcolor " + config.backgroundcolor + " \n";
    uml += "title \n";
    uml += config.title;
    uml += "\nend title \n";
    uml += "footer ";
    uml += config.copyright()  + "\n\n";
    uml += "header ";
    uml += config.header + "\n\n";

    uml += data + "\n";
    uml += "@enduml";

    return uml;
}

module.exports = Template;
