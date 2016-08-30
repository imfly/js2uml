var esprima = require('esprima');
var estraverse = require('estraverse');
var _ = require('ramda');

var Syntax = {
    AssignmentExpression: 'AssignmentExpression',
    ArrayExpression: 'ArrayExpression',
    BlockStatement: 'BlockStatement',
    BinaryExpression: 'BinaryExpression',
    BreakStatement: 'BreakStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ConditionalExpression: 'ConditionalExpression',
    ContinueStatement: 'ContinueStatement',
    DoWhileStatement: 'DoWhileStatement',
    DebuggerStatement: 'DebuggerStatement',
    EmptyStatement: 'EmptyStatement',
    ExpressionStatement: 'ExpressionStatement',
    ForStatement: 'ForStatement',
    ForInStatement: 'ForInStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    Literal: 'Literal',
    LabeledStatement: 'LabeledStatement',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    NewExpression: 'NewExpression',
    ObjectExpression: 'ObjectExpression',
    Program: 'Program',
    Property: 'Property',
    ReturnStatement: 'ReturnStatement',
    SequenceExpression: 'SequenceExpression',
    SwitchStatement: 'SwitchStatement',
    SwitchCase: 'SwitchCase',
    ThisExpression: 'ThisExpression',
    ThrowStatement: 'ThrowStatement',
    TryStatement: 'TryStatement',
    UnaryExpression: 'UnaryExpression',
    UpdateExpression: 'UpdateExpression',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    WhileStatement: 'WhileStatement',
    WithStatement: 'WithStatement'
};

// 递归检查对象和其子节点
// object 是语法树或其节点， visitor是真正的处理函数，master是路径
function traverse(object, visitor, master) {
    var key, child, parent, path;

    parent = (typeof master === 'undefined') ? [] : master;

    if (visitor.call(null, object, parent) === false) {
        return;
    }
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            path = [object];
            path.push(parent);
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor, path);
            }
        }
    }
}

// 创建新类
function createsNewScope(node) {
    return node.type === 'FunctionDeclaration'; //||
    // node.type === 'FunctionExpression' ||
    // node.type === 'Program';
}

function Parser(code) {
    var tree;
    var scopeChain = [];

    tree = esprima.parse(code);

    estraverse.traverse(tree, {
        enter: function(node, parent) {
            if (createsNewScope(node)) {
                scopeChain.push([]);
            }
            var currentScope = scopeChain[scopeChain.length - 1];
            var obj = getNodeName(node, parent);
            if (!_.isEmpty(obj) && !_.isNil(obj)) {
                currentScope.push(obj);
            }
        }
    });

    return scopeChain;
}

function getNodeName(node, parent) {
    var nodeName = {};
    if (node.type === Syntax.FunctionDeclaration) {
        nodeName = {
            name: node.id.name,
            params: getParams(node)
        };
    } else if (node.type === Syntax.FunctionExpression) {
        if (parent.type === Syntax.AssignmentExpression) {
            if (typeof parent.left.object.type !== 'undefined') {
                nodeName = {
                    name: parent.left.property.name,
                    params: getParams(node),
                    visiable: isVisiable(parent)
                };
            }
        } else if (parent.type === Syntax.VariableDeclarator) {
            nodeName = {
                name: parent.left.property.name,
                params: getParams(node),
                visiable: isVisiable(parent)
            };
        } else if (parent.type === Syntax.CallExpression) {
            nodeName = getLinks(parent.callee.object);
        }
    }

    return nodeName;
}

function isVisiable(node) {
    if (node.left.object.type === 'Identifier') {
        return node.left.object.name;
    } else {
        return "Public";
    }
}

function getParams(node) {
    var params = [];
    if (node.params.length !== 0) {
        params = node.params.map(function(n) {
            return n.name;
        })
    }
    return params;
}

function getLinks(obj) {
    if (typeof obj !== "undefined" && obj.type === Syntax.MemberExpression) {
        if (typeof obj.object !== "undefined" && obj.object.type === Syntax.MemberExpression) {
            obj = obj.object;
        }

        return {
            "package": obj.object.name,
            "lib": obj.property.name
        }
    }
}

module.exports = Parser;
