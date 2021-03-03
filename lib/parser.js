var esprima = require('esprima');
var estraverse = require('estraverse');
var _ = require('ramda');

var TheClass = null;

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
    ClassDeclaration: 'ClassDeclaration',
    MethodDefinition: 'MethodDefinition',
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

// 创建新类
function createsNewScope(node, parent) {
    const es5Class = node.type === Syntax.FunctionDeclaration &&
        parent.type === Syntax.Program;
    const es6Class = node.type === Syntax.ClassDeclaration
    return es5Class || es6Class;
}

function Parser(code) {
    var tree = esprima.parse(code);
    var scopeChain = [];

    estraverse.traverse(tree, {
        enter: function(node, parent) {
            if (createsNewScope(node, parent)) {
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

    if (node.type === Syntax.Program || parent.type === Syntax.Program) {
        if (node.type === Syntax.FunctionDeclaration) {
            nodeName = {
                name: node.id.name,
                params: getParams(node)
            };
        } else if (node.type === Syntax.ClassDeclaration) {
            nodeName = {
                name: node.id.name
            };
        } else if (node.type === Syntax.VariableDeclaration) {
            //todo var
        } else if (node.type === Syntax.ExpressionStatement && node.expression.left &&
            (node.expression.left.name === "exports" ||
                node.expression.left.property.name === "exports")) {
                  //fixme 这里绑定了设计，不太好
            TheClass = node.expression.right.name
        }
    } else if (node.type === Syntax.FunctionExpression) {
        if (parent.type === Syntax.AssignmentExpression) {
            console.log('parent.type', parent);
            if (typeof parent.left.type !== 'undefined') {
                nodeName = {
                    name: parent.left.name,
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
    } else if (node.type === Syntax.MethodDefinition) {
        nodeName = {
            name: node.key.name,
            params: getParams(node.value)
        };
    }
    return nodeName;
}

function isVisiable(node) {
    if (node.left.type === 'Identifier') {
        return node.left.name;
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

        //todo
        return {
            "package": obj.object.name,
            "lib": obj.property.name
        }
    }
}

module.exports = Parser;
