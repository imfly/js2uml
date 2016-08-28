'use strict';

var esprima = require('esprima');

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

// Executes visitor on the object and its children (recursively).

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

// Insert a prolog in the body of every function.
// It will be in the form of a function call:
//
//     traceName(object);
//
// where the object contains the following properties:
//
//    'name' holds the name of the function
//    'lineNumber' holds the starting line number of the function block
//    'range' contains the index-based range of the function
//
// The name of the function represents the associated reference for
// the function (deduced on a best-effort basis if it is not
// a function declaration).
//
// If traceName is a function instead of a string, it will be invoked and
// the result will be used as the entire prolog. The arguments for the
// invocation are the function name, range, and location info.

function traceFunctionEntrance(traceName) {

    return function(code) {
        var tree,
            functionList,
            param,
            signature,
            pos,
            i;


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
    };
}

function modify(code, modifiers) {
    var i;

    if (Object.prototype.toString.call(modifiers) === '[object Array]') {
        for (i = 0; i < modifiers.length; i += 1) {
            code = modifiers[i].call(null, code);
        }
    } else if (typeof modifiers === 'function') {
        code = modifiers.call(null, code);
    } else {
        throw new Error('Wrong use of esmorph.modify() function');
    }

    return code;
}

// Sync with package.json.
exports.version = '0.0.0-dev';

exports.modify = modify;

exports.Tracer = {
    FunctionEntrance: traceFunctionEntrance
};
