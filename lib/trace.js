'use strict';
var _ = require('ramda');

var Trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
});

module.exports = Trace;
