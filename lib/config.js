var moment = require('moment');
moment.locale('zh-CN');

module.exports = configure = {
    "title": "类图标题",
    "header": "《Nodejs开发加密货币》分析用图",
    "footer": " http://bitcoin-on-nodejs.ebookchain.org ",
    "sourceFile": ".",
    "output": "./test/dapps.pu",
    "verbose": false,
    "author": "imfly",
    "borderColor": "#blue\9932CC",
    "backgroundcolor": "AntiqueWhite/white",
    "copyright": function() {
        return " copyright (c) " + configure.author + " " + moment().format('lll') + ", " + configure.footer;
    }
}
