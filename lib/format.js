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
    return sign(obj) + obj.name + ": (" + obj.params.join(",") + ")";
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
        Klass += "Class " + oKlass.name + "{\n";

        var methods = getMethods(item);

        var getLinks = _.compose(_.uniq, _.map(linkItem(oKlass.name)), _.filter(linkFilter));

        links.push(getLinks(item));
        klasses.push(oKlass.name);

        return Klass + methods.join('\n') + "\n}\n";
    }).join('\n');

    //console.log(klasses);

    return result += "\n" + _.flatten(links).join('\n');
}

//  用于比较
//  function getLinks(list) {
//     return list.map(function(item) {
//         var klass = item.shift();
//         klassName = klass.name;
//         return item.filter(function(m) {
//                 return typeof m.name === "undefined";
//             })
//             .map(function methods(m) {
//                 return klassName + "-->" + m.lib;
//             }).join('\n');
//     })
// }

// var links = item.filter(function(m) {
//         return typeof m.name === "undefined";
//     })
//     .map(function(m) {
//         return KlassName.name + "-->" + m.lib;
//     });

function sign(item) {
    var sign = "+";
    if (item.visiable === "privated") {
        sign = "-";
    }

    return "  " + sign + " ";
}

module.exports = Format;
