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
    return node.type === 'FunctionDeclaration' ;//||
        // node.type === 'FunctionExpression' ||
        // node.type === 'Program';
}

function getFunctionList(code) {
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
            if (!_.isEmpty(obj)) {
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
            name: node.id.name
        };
    } else if (node.type === Syntax.FunctionExpression) {
        console.log('parent= ', parent);
        if (parent.type === Syntax.AssignmentExpression) {
            if (typeof parent.left.object.type !== 'undefined') {

                nodeName = {
                    name: parent.left.property.name,
                    visiable: isVisiable(parent)
                };
            }
        } else if (parent.type === Syntax.VariableDeclarator) {
            nodeName = {
                name: parent.left.property.name,
                visiable: isVisiable(parent)
            };
        }
        // else if (parent.type === Syntax.CallExpression) {
        //   console.log('node= ', node);
        //     nodeName = {
        //         name: node.id.name,
        //         range: node.range
        //     };
        // }
        else if (typeof parent.length === 'number') {
            nodeName = {
                name: node.id.name,
                visiable: isVisiable(parent)
            };
        } else if (typeof parent.key !== 'undefined') {
            if (parent.key.type === 'Identifier') {
                if (parent.value === node && parent.key.name) {
                    nodeName = {
                        name: node.id.name,
                        visiable: isVisiable(parent)
                    };
                }
            }
        }
    }

    return nodeName;
}

function isVisiable(node) {
    if (node.left.object.type === 'undefined' || node.left.object.name === 'undefined') {
        return "Public";
    } else {
        return node.left.object.name;
    }
}

function Parser(code, functionList) {
    // Insert the instrumentation code from the last entry.
    // This is to ensure that the range for each entry remains valid)
    // (it won't shift due to some new inserting string before the range).
    for (i = functionList.length - 1; i >= 0; i -= 1) {
        param = {
            name: functionList[i].name,
            range: functionList[i].range,
            loc: functionList[i].loc
        };
        if (typeof traceName === 'function') {
            signature = traceName.call(null, param);
        } else {
            signature = traceName + '({ ';
            signature += 'name: \'' + functionList[i].name + '\', ';
            if (typeof functionList[i].loc !== 'undefined') {
                signature += 'lineNumber: ' + functionList[i].loc.start.line + ', ';
            }
            signature += 'range: [' + functionList[i].range[0] + ', ' +
                functionList[i].range[1] + '] ';
            signature += '});';
        }
        pos = functionList[i].blockStart + 1;
        code = code.slice(0, pos) + '\n' + signature + code.slice(pos, code.length);
    }

    return code;
}

module.exports = getFunctionList;
