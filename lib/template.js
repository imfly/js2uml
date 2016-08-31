var config = require('./config.js');

function Template(data) {
    var uml = "";
    uml += "@startuml \n";
    uml += "skinparam BorderColor #blue\9932CC \n";
    uml += "skinparam backgroundcolor AntiqueWhite/white \n";
    uml += "title \n";
    uml += config.title;
    uml += "\nend title \n";
    uml += "footer ";
    uml += config.footer + "\n";
    uml += "header ";
    uml += config.header + "\n\n";

    uml += "  " + data + "\n";
    uml += "@enduml";

    return uml;
}

module.exports = Template;
