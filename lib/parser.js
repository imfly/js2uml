var esprima = require('esprima');
var estraverse = require('estraverse');

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

function getFunctionList(code) {
    var tree,
        functionList,
        param,
        signature,
        pos,
        i;

        var comments = [], tokens = [];


    tree = esprima.parse(code, {
        range: true,
        loc: true
    });

    functionList = [];
    traverse(tree, function(node, path) {
        var parent;
        if (node.type === Syntax.FunctionDeclaration) {
            functionList.push({
                name: node.id.name,
                range: node.range,
                loc: node.loc,
                blockStart: node.body.range[0]
            });
        } else if (node.type === Syntax.FunctionExpression) {
            parent = path[0];
            if (parent.type === Syntax.AssignmentExpression) {
                if (typeof parent.left.range !== 'undefined') {
                    functionList.push({
                        name: code.slice(parent.left.range[0],
                            parent.left.range[1]).replace(/"/g, '\\"'),
                        range: node.range,
                        loc: node.loc,
                        blockStart: node.body.range[0]
                    });
                }
            } else if (parent.type === Syntax.VariableDeclarator) {
                functionList.push({
                    name: parent.id.name,
                    range: node.range,
                    loc: node.loc,
                    blockStart: node.body.range[0]
                });
            } else if (parent.type === Syntax.CallExpression) {
                functionList.push({
                    name: parent.id ? parent.id.name : '[Anonymous]',
                    range: node.range,
                    loc: node.loc,
                    blockStart: node.body.range[0]
                });
            } else if (typeof parent.length === 'number') {
                functionList.push({
                    name: parent.id ? parent.id.name : '[Anonymous]',
                    range: node.range,
                    loc: node.loc,
                    blockStart: node.body.range[0]
                });
            } else if (typeof parent.key !== 'undefined') {
                if (parent.key.type === 'Identifier') {
                    if (parent.value === node && parent.key.name) {
                        functionList.push({
                            name: parent.key.name,
                            range: node.range,
                            loc: node.loc,
                            blockStart: node.body.range[0]
                        });
                    }
                }
            }
        }
    });

    return functionList;
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
