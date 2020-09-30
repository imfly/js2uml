var _ = require('ramda');

// filter::a -> (b -> a)
var format = _.curry(function(f, obj) {
    return f(obj);
});

// Filter::a -> Bool
var filter = format(function(obj) {
    return typeof obj !== "undefined";
});

var methodFilter = _.compose(filter, _.prop('name'));
var linkFilter = _.compose(filter, _.prop('lib'));

// methodFilter::a -> String
var methodItem = format(function(obj) {
    return sign(obj) + obj.name + ": (" + obj.params.join(", ") + ")";
});

// getMethods::[a] -> [String]
var getMethods = _.compose(_.uniq, _.map(methodItem), _.filter(methodFilter));

// todo:
var linkItem = _.curry(function(klass, obj) {
    return klass + " --> " + obj.lib;
});

function Format(list) {
    var result = "";
    var links = [];
    var klasses = [];

    result += list.map(function(item) {
        var Klass = "";
        var oKlass = item.shift();
        Klass += "Class " + oKlass.name + " {\n";

        var methods = getMethods(item);

        var getLinks = _.compose(_.uniq, _.map(linkItem(oKlass.name)), _.filter(linkFilter));

        links.push(getLinks(item));
        klasses.push(oKlass.name);

        return Klass + methods.join('\n') + "\n}\n";
    }).join('\n');

    return result += "\n" + _.flatten(links).join('\n');
}

function sign(item) {
    var sign = "+";
    if (item.visiable === "privated") {
        sign = "-";
    }

    return "  " + sign + " ";
}

module.exports = Format;
