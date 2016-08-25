var config = require('./config.json');

function generatePu(data) {
    var uml = "";
    uml += "@startuml \n";
    uml += "skinparam BorderColor #blue\9932CC \n";
    uml += "skinparam backgroundcolor AntiqueWhite/white \n";
    uml += "title \n";
    uml += config.title;
    uml += "end title \n";
    uml += "footer ";
    uml += config.footer + "\n";
    uml += "header ";
    uml += config.header + "\n";

    uml += data + "\n";
    uml += "@enduml";

    return uml;
}
