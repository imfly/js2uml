var _ = require('ramda');

function Format(List) {
    List.map(function Klass(item) {
        var Klass = "";
        var KlassName = item.pop();
        Klass += "Class " + KlassName.name + "{\n";
        item.map(function methods(m) {
            var methodName = "";
            if (typeof m.name !== "undefined") {
                methodName += m.name + ": (" + m.params.join(",") + ")";
            }
            return methodName;
        })
    })

    return code;
}


modules.exports = Format;
