var _ = require('ramda');

function Format(list) {
    return getClass(list);
}

var filter = _.curry(function (f, obj) {
  return f(obj);
});

var methodFilter = filter(function (obj) {
  return typeof obj.name !== "undefined";
});

var methodItem = filter(function (obj) {
    return sign(obj) + obj.name + ": (" + obj.params.join(",") + ")";
});

var getMethods = _.compose(_.map(methodItem), _.filter(methodFilter));

// todo:
var linkItem = filter(function (obj) {
    return KlassName.name + "-->" + m.lib;
});
var getLinks = _.compose(_.map(linkItem), _.filter(!methodFilter));

function getClass(list) {
    return list.map(function Klass(item) {
        var Klass = "";
        var KlassName = item.shift();
        Klass += "Class " + KlassName.name + "{\n";

        var methods = getMethods(item).join('\n');

        var links = item.filter(function(m) {
                return typeof m.name === "undefined";
            })
            .map(function(m) {
                return KlassName.name + "-->" + m.lib;
            });

        var linked = _.uniq(links);

        return Klass + methods + "\n}\n" + linked.join('\n');
    }).join('\n')

}

function getLinks(list) {
    return list.map(function(item) {
        console.log(item);
        var klass = item.shift();
        klassName = klass.name;
        return item.filter(function(m) {
                return typeof m.name === "undefined";
            })
            .map(function methods(m) {
                return klassName + "-->" + m.lib;
            }).join('\n');
    })
}

function sign(item) {
    var sign = "+";
    if (item.visiable === "privated") {
        sign = "-";
    }

    return "  " + sign + " ";
}

module.exports = Format;
