{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "async"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "require"
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "async",
                                "raw": "'async'"
                            }
                        ]
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "sandboxHelper"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "require"
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "../helpers/sandbox.js",
                                "raw": "'../helpers/sandbox.js'"
                            }
                        ]
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "modules"
                    },
                    "init": null
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "library"
                    },
                    "init": null
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "self"
                    },
                    "init": null
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "properties": []
                    }
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "shared"
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "properties": []
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "launched"
                    }
                },
                "right": {
                    "type": "ObjectExpression",
                    "properties": []
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "unconfirmedOutTansfers"
                    }
                },
                "right": {
                    "type": "ObjectExpression",
                    "properties": []
                }
            }
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "isASCII"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "str"
                },
                {
                    "type": "Identifier",
                    "name": "extended"
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ReturnStatement",
                        "argument": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                        "type": "Identifier",
                                        "name": "extended"
                                    },
                                    "consequent": {
                                        "type": "Literal",
                                        "value": {},
                                        "raw": "/^[\\x00-\\xFF]*$/",
                                        "regex": {
                                            "pattern": "^[\\x00-\\xFF]*$",
                                            "flags": ""
                                        }
                                    },
                                    "alternate": {
                                        "type": "Literal",
                                        "value": {},
                                        "raw": "/^[\\x00-\\x7F]*$/",
                                        "regex": {
                                            "pattern": "^[\\x00-\\x7F]*$",
                                            "flags": ""
                                        }
                                    }
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "test"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Identifier",
                                    "name": "str"
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "OutTransfer"
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "ThisExpression"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "create"
                                }
                            },
                            "right": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                    {
                                        "type": "Identifier",
                                        "name": "data"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "trs"
                                    }
                                ],
                                "defaults": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "trs"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "recipientId"
                                                    }
                                                },
                                                "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "data"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "recipientId"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "trs"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "amount"
                                                    }
                                                },
                                                "right": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "data"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "amount"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "trs"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "asset"
                                                        }
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "outTransfer"
                                                    }
                                                },
                                                "right": {
                                                    "type": "ObjectExpression",
                                                    "properties": [
                                                        {
                                                            "type": "Property",
                                                            "key": {
                                                                "type": "Identifier",
                                                                "name": "dappId"
                                                            },
                                                            "computed": false,
                                                            "value": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "name": "data"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "dappId"
                                                                }
                                                            },
                                                            "kind": "init",
                                                            "method": false,
                                                            "shorthand": false
                                                        },
                                                        {
                                                            "type": "Property",
                                                            "key": {
                                                                "type": "Identifier",
                                                                "name": "transactionId"
                                                            },
                                                            "computed": false,
                                                            "value": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "name": "data"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "transactionId"
                                                                }
                                                            },
                                                            "kind": "init",
                                                            "method": false,
                                                            "shorthand": false
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Identifier",
                                                "name": "trs"
                                            }
                                        }
                                    ]
                                },
                                "generator": false,
                                "expression": false
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "ThisExpression"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "calculateFee"
                                }
                            },
                            "right": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                    {
                                        "type": "Identifier",
                                        "name": "trs"
                                    },
                                    {
                                        "type": "Identifier",
                                        "name": "sender"
                                    }
                                ],
                                "defaults": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "library"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "logic"
                                                            }
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "block"
                                                        }
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "calculateFee"
                                                    }
                                                },
                                                "arguments": []
                                            }
                                        }
                                    ]
                                },
                                "generator": false,
                                "expression": false
                            }
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "DApps"
            },
            "params": [
                {
                    "type": "Identifier",
                    "name": "cb"
                },
                {
                    "type": "Identifier",
                    "name": "scope"
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "library"
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "scope"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "self"
                            },
                            "right": {
                                "type": "ThisExpression"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "self"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "__private"
                                }
                            },
                            "right": {
                                "type": "Identifier",
                                "name": "privated"
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "library"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "logic"
                                        }
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "transaction"
                                    }
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "attachAssetType"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "TransactionTypes"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "DAPP"
                                    }
                                },
                                {
                                    "type": "NewExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "DApp"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "library"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "logic"
                                        }
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "transaction"
                                    }
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "attachAssetType"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "TransactionTypes"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "IN_TRANSFER"
                                    }
                                },
                                {
                                    "type": "NewExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "InTransfer"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "library"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "logic"
                                        }
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "transaction"
                                    }
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "attachAssetType"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "TransactionTypes"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "OUT_TRANSFER"
                                    }
                                },
                                {
                                    "type": "NewExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "OutTransfer"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "fs"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "exists"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "path"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "join"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": ".",
                                            "raw": "'.'"
                                        },
                                        {
                                            "type": "Literal",
                                            "value": "public",
                                            "raw": "'public'"
                                        },
                                        {
                                            "type": "Literal",
                                            "value": "dapps",
                                            "raw": "'dapps'"
                                        }
                                    ]
                                },
                                {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [
                                        {
                                            "type": "Identifier",
                                            "name": "exists"
                                        }
                                    ],
                                    "defaults": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "IfStatement",
                                                "test": {
                                                    "type": "Identifier",
                                                    "name": "exists"
                                                },
                                                "consequent": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ExpressionStatement",
                                                            "expression": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "Identifier",
                                                                    "name": "rmdir"
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "path"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "join"
                                                                            }
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Literal",
                                                                                "value": ".",
                                                                                "raw": "'.'"
                                                                            },
                                                                            {
                                                                                "type": "Literal",
                                                                                "value": "public",
                                                                                "raw": "'public'"
                                                                            },
                                                                            {
                                                                                "type": "Literal",
                                                                                "value": "dapps",
                                                                                "raw": "'dapps'"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "FunctionExpression",
                                                                        "id": null,
                                                                        "params": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "err"
                                                                            }
                                                                        ],
                                                                        "defaults": [],
                                                                        "body": {
                                                                            "type": "BlockStatement",
                                                                            "body": [
                                                                                {
                                                                                    "type": "IfStatement",
                                                                                    "test": {
                                                                                        "type": "Identifier",
                                                                                        "name": "err"
                                                                                    },
                                                                                    "consequent": {
                                                                                        "type": "BlockStatement",
                                                                                        "body": [
                                                                                            {
                                                                                                "type": "ExpressionStatement",
                                                                                                "expression": {
                                                                                                    "type": "CallExpression",
                                                                                                    "callee": {
                                                                                                        "type": "MemberExpression",
                                                                                                        "computed": false,
                                                                                                        "object": {
                                                                                                            "type": "MemberExpression",
                                                                                                            "computed": false,
                                                                                                            "object": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "library"
                                                                                                            },
                                                                                                            "property": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "logger"
                                                                                                            }
                                                                                                        },
                                                                                                        "property": {
                                                                                                            "type": "Identifier",
                                                                                                            "name": "error"
                                                                                                        }
                                                                                                    },
                                                                                                    "arguments": [
                                                                                                        {
                                                                                                            "type": "Identifier",
                                                                                                            "name": "err"
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    "alternate": null
                                                                                },
                                                                                {
                                                                                    "type": "ExpressionStatement",
                                                                                    "expression": {
                                                                                        "type": "CallExpression",
                                                                                        "callee": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "Identifier",
                                                                                                "name": "privated"
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "createBasePathes"
                                                                                            }
                                                                                        },
                                                                                        "arguments": [
                                                                                            {
                                                                                                "type": "FunctionExpression",
                                                                                                "id": null,
                                                                                                "params": [
                                                                                                    {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "err"
                                                                                                    }
                                                                                                ],
                                                                                                "defaults": [],
                                                                                                "body": {
                                                                                                    "type": "BlockStatement",
                                                                                                    "body": [
                                                                                                        {
                                                                                                            "type": "ExpressionStatement",
                                                                                                            "expression": {
                                                                                                                "type": "CallExpression",
                                                                                                                "callee": {
                                                                                                                    "type": "Identifier",
                                                                                                                    "name": "setImmediate"
                                                                                                                },
                                                                                                                "arguments": [
                                                                                                                    {
                                                                                                                        "type": "Identifier",
                                                                                                                        "name": "cb"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "type": "Identifier",
                                                                                                                        "name": "err"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "type": "Identifier",
                                                                                                                        "name": "self"
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                "generator": false,
                                                                                                "expression": false
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        "generator": false,
                                                                        "expression": false
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                "alternate": {
                                                    "type": "BlockStatement",
                                                    "body": [
                                                        {
                                                            "type": "ExpressionStatement",
                                                            "expression": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "privated"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "createBasePathes"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "FunctionExpression",
                                                                        "id": null,
                                                                        "params": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "err"
                                                                            }
                                                                        ],
                                                                        "defaults": [],
                                                                        "body": {
                                                                            "type": "BlockStatement",
                                                                            "body": [
                                                                                {
                                                                                    "type": "ExpressionStatement",
                                                                                    "expression": {
                                                                                        "type": "CallExpression",
                                                                                        "callee": {
                                                                                            "type": "Identifier",
                                                                                            "name": "setImmediate"
                                                                                        },
                                                                                        "arguments": [
                                                                                            {
                                                                                                "type": "Identifier",
                                                                                                "name": "cb"
                                                                                            },
                                                                                            {
                                                                                                "type": "Literal",
                                                                                                "value": null,
                                                                                                "raw": "null"
                                                                                            },
                                                                                            {
                                                                                                "type": "Identifier",
                                                                                                "name": "self"
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        },
                                                                        "generator": false,
                                                                        "expression": false
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "generator": false,
                                    "expression": false
                                }
                            ]
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "attachApi"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "router"
                                        },
                                        "init": {
                                            "type": "NewExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "Router"
                                            },
                                            "arguments": []
                                        }
                                    }
                                ],
                                "kind": "var"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "router"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "get"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": "/siaenabled",
                                            "raw": "'/siaenabled'"
                                        },
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "req"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "res"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "next"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "ReturnStatement",
                                                        "argument": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "Identifier",
                                                                    "name": "res"
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "json"
                                                                }
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "ObjectExpression",
                                                                    "properties": [
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "success"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "Literal",
                                                                                "value": true,
                                                                                "raw": "true"
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "enabled"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "UnaryExpression",
                                                                                "operator": "!",
                                                                                "argument": {
                                                                                    "type": "UnaryExpression",
                                                                                    "operator": "!",
                                                                                    "argument": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": false,
                                                                                        "object": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "library"
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "config"
                                                                                                }
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "sia"
                                                                                            }
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "name": "peer"
                                                                                        }
                                                                                    },
                                                                                    "prefix": true
                                                                                },
                                                                                "prefix": true
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "library"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "network"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "app"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "use"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": "/api/dapps",
                                            "raw": "'/api/dapps'"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "router"
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "library"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "network"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "app"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "use"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "err"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "req"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "res"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "next"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "IfStatement",
                                                        "test": {
                                                            "type": "UnaryExpression",
                                                            "operator": "!",
                                                            "argument": {
                                                                "type": "Identifier",
                                                                "name": "err"
                                                            },
                                                            "prefix": true
                                                        },
                                                        "consequent": {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "Identifier",
                                                                    "name": "next"
                                                                },
                                                                "arguments": []
                                                            }
                                                        },
                                                        "alternate": null
                                                    },
                                                    {
                                                        "type": "ExpressionStatement",
                                                        "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "library"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "logger"
                                                                    }
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "error"
                                                                }
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "req"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "url"
                                                                    }
                                                                },
                                                                {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                        "type": "MemberExpression",
                                                                        "computed": false,
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "err"
                                                                        },
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "toString"
                                                                        }
                                                                    },
                                                                    "arguments": []
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "type": "ExpressionStatement",
                                                        "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "CallExpression",
                                                                    "callee": {
                                                                        "type": "MemberExpression",
                                                                        "computed": false,
                                                                        "object": {
                                                                            "type": "Identifier",
                                                                            "name": "res"
                                                                        },
                                                                        "property": {
                                                                            "type": "Identifier",
                                                                            "name": "status"
                                                                        }
                                                                    },
                                                                    "arguments": [
                                                                        {
                                                                            "type": "Literal",
                                                                            "value": 500,
                                                                            "raw": "500"
                                                                        }
                                                                    ]
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "send"
                                                                }
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "ObjectExpression",
                                                                    "properties": [
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "success"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "Literal",
                                                                                "value": false,
                                                                                "raw": "false"
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "error"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "CallExpression",
                                                                                "callee": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "err"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "toString"
                                                                                    }
                                                                                },
                                                                                "arguments": []
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "get"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "id"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "library"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "dbLite"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "query"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": "SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId = $id",
                                            "raw": "\"SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId = $id\""
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": [
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "id"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "id"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Literal",
                                                    "value": "name",
                                                    "raw": "'name'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "description",
                                                    "raw": "'description'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "tags",
                                                    "raw": "'tags'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "siaAscii",
                                                    "raw": "'siaAscii'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "siaIcon",
                                                    "raw": "'siaIcon'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "git",
                                                    "raw": "'git'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "type",
                                                    "raw": "'type'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "category",
                                                    "raw": "'category'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "icon",
                                                    "raw": "'icon'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "transactionId",
                                                    "raw": "'transactionId'"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "err"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "rows"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "IfStatement",
                                                        "test": {
                                                            "type": "LogicalExpression",
                                                            "operator": "||",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "err"
                                                            },
                                                            "right": {
                                                                "type": "BinaryExpression",
                                                                "operator": "==",
                                                                "left": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "rows"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "length"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "Literal",
                                                                    "value": 0,
                                                                    "raw": "0"
                                                                }
                                                            }
                                                        },
                                                        "consequent": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ReturnStatement",
                                                                    "argument": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "Identifier",
                                                                            "name": "setImmediate"
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "cb"
                                                                            },
                                                                            {
                                                                                "type": "ConditionalExpression",
                                                                                "test": {
                                                                                    "type": "Identifier",
                                                                                    "name": "err"
                                                                                },
                                                                                "consequent": {
                                                                                    "type": "Literal",
                                                                                    "value": "Database error",
                                                                                    "raw": "\"Database error\""
                                                                                },
                                                                                "alternate": {
                                                                                    "type": "Literal",
                                                                                    "value": "DApp not found",
                                                                                    "raw": "\"DApp not found\""
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "alternate": null
                                                    },
                                                    {
                                                        "type": "ReturnStatement",
                                                        "argument": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "name": "setImmediate"
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "cb"
                                                                },
                                                                {
                                                                    "type": "Literal",
                                                                    "value": null,
                                                                    "raw": "null"
                                                                },
                                                                {
                                                                    "type": "MemberExpression",
                                                                    "computed": true,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "rows"
                                                                    },
                                                                    "property": {
                                                                        "type": "Literal",
                                                                        "value": 0,
                                                                        "raw": "0"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "getByIds"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "ids"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ForStatement",
                                "init": {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                        {
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "Identifier",
                                                "name": "i"
                                            },
                                            "init": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                            }
                                        }
                                    ],
                                    "kind": "var"
                                },
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                    },
                                    "right": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "ids"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "length"
                                        }
                                    }
                                },
                                "update": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "argument": {
                                        "type": "Identifier",
                                        "name": "i"
                                    },
                                    "prefix": false
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "MemberExpression",
                                                    "computed": true,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "ids"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "i"
                                                    }
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Literal",
                                                            "value": "'",
                                                            "raw": "\"'\""
                                                        },
                                                        "right": {
                                                            "type": "MemberExpression",
                                                            "computed": true,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "ids"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "i"
                                                            }
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": "'",
                                                        "raw": "\"'\""
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "library"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "dbLite"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "query"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "Literal",
                                                    "value": "SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId IN (",
                                                    "raw": "\"SELECT name, description, tags, siaAscii, siaIcon, git, type, category, icon, transactionId FROM dapps WHERE transactionId IN (\""
                                                },
                                                "right": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "ids"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "join"
                                                        }
                                                    },
                                                    "arguments": [
                                                        {
                                                            "type": "Literal",
                                                            "value": ",",
                                                            "raw": "','"
                                                        }
                                                    ]
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": ")",
                                                "raw": "\")\""
                                            }
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": []
                                        },
                                        {
                                            "type": "ArrayExpression",
                                            "elements": [
                                                {
                                                    "type": "Literal",
                                                    "value": "name",
                                                    "raw": "'name'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "description",
                                                    "raw": "'description'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "tags",
                                                    "raw": "'tags'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "siaAscii",
                                                    "raw": "'siaAscii'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "siaIcon",
                                                    "raw": "'siaIcon'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "git",
                                                    "raw": "'git'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "type",
                                                    "raw": "'type'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "category",
                                                    "raw": "'category'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "icon",
                                                    "raw": "'icon'"
                                                },
                                                {
                                                    "type": "Literal",
                                                    "value": "transactionId",
                                                    "raw": "'transactionId'"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "err"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "rows"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "IfStatement",
                                                        "test": {
                                                            "type": "Identifier",
                                                            "name": "err"
                                                        },
                                                        "consequent": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ReturnStatement",
                                                                    "argument": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "Identifier",
                                                                            "name": "setImmediate"
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "cb"
                                                                            },
                                                                            {
                                                                                "type": "ConditionalExpression",
                                                                                "test": {
                                                                                    "type": "Identifier",
                                                                                    "name": "err"
                                                                                },
                                                                                "consequent": {
                                                                                    "type": "Literal",
                                                                                    "value": "Database error",
                                                                                    "raw": "\"Database error\""
                                                                                },
                                                                                "alternate": {
                                                                                    "type": "Literal",
                                                                                    "value": "DApp not found",
                                                                                    "raw": "\"DApp not found\""
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "alternate": null
                                                    },
                                                    {
                                                        "type": "ReturnStatement",
                                                        "argument": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "name": "setImmediate"
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "cb"
                                                                },
                                                                {
                                                                    "type": "Literal",
                                                                    "value": null,
                                                                    "raw": "null"
                                                                },
                                                                {
                                                                    "type": "Identifier",
                                                                    "name": "rows"
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "privated"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "downloadSiaFile"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "id"
                        },
                        {
                            "type": "Identifier",
                            "name": "ascii"
                        },
                        {
                            "type": "Identifier",
                            "name": "icon"
                        },
                        {
                            "type": "Identifier",
                            "name": "path"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "modules"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "sia"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "uploadAscii"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Identifier",
                                            "name": "id"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "ascii"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "icon"
                                        },
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "err"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "file"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "IfStatement",
                                                        "test": {
                                                            "type": "Identifier",
                                                            "name": "err"
                                                        },
                                                        "consequent": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ReturnStatement",
                                                                    "argument": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "Identifier",
                                                                            "name": "setImmediate"
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "cb"
                                                                            },
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "err"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "alternate": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ExpressionStatement",
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "name": "modules"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "sia"
                                                                                }
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "download"
                                                                            }
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "file"
                                                                            },
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "path"
                                                                            },
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "cb"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "DApps"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "prototype"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "message"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "dappid"
                        },
                        {
                            "type": "Identifier",
                            "name": "body"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "self"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "request"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Identifier",
                                            "name": "dappid"
                                        },
                                        {
                                            "type": "Literal",
                                            "value": "post",
                                            "raw": "\"post\""
                                        },
                                        {
                                            "type": "Literal",
                                            "value": "/message",
                                            "raw": "\"/message\""
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "body"
                                        },
                                        {
                                            "type": "Identifier",
                                            "name": "cb"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "DApps"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "prototype"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "onBind"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "scope"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "modules"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "scope"
                                    }
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "DApps"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "prototype"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "onBlockchainReady"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "library"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "config"
                                        }
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "dapp"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "async"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "eachSeries"
                                                    }
                                                },
                                                "arguments": [
                                                    {
                                                        "type": "LogicalExpression",
                                                        "operator": "||",
                                                        "left": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                                "type": "MemberExpression",
                                                                "computed": false,
                                                                "object": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "library"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "config"
                                                                    }
                                                                },
                                                                "property": {
                                                                    "type": "Identifier",
                                                                    "name": "dapp"
                                                                }
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "autoexec"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "ArrayExpression",
                                                            "elements": []
                                                        }
                                                    },
                                                    {
                                                        "type": "FunctionExpression",
                                                        "id": null,
                                                        "params": [
                                                            {
                                                                "type": "Identifier",
                                                                "name": "dapp"
                                                            },
                                                            {
                                                                "type": "Identifier",
                                                                "name": "cb"
                                                            }
                                                        ],
                                                        "defaults": [],
                                                        "body": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ExpressionStatement",
                                                                    "expression": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "privated"
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "launch"
                                                                            }
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "ObjectExpression",
                                                                                "properties": [
                                                                                    {
                                                                                        "type": "Property",
                                                                                        "key": {
                                                                                            "type": "Identifier",
                                                                                            "name": "params"
                                                                                        },
                                                                                        "computed": false,
                                                                                        "value": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "Identifier",
                                                                                                "name": "dapp"
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "params"
                                                                                            }
                                                                                        },
                                                                                        "kind": "init",
                                                                                        "method": false,
                                                                                        "shorthand": false
                                                                                    },
                                                                                    {
                                                                                        "type": "Property",
                                                                                        "key": {
                                                                                            "type": "Identifier",
                                                                                            "name": "id"
                                                                                        },
                                                                                        "computed": false,
                                                                                        "value": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "Identifier",
                                                                                                "name": "dapp"
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "dappid"
                                                                                            }
                                                                                        },
                                                                                        "kind": "init",
                                                                                        "method": false,
                                                                                        "shorthand": false
                                                                                    },
                                                                                    {
                                                                                        "type": "Property",
                                                                                        "key": {
                                                                                            "type": "Identifier",
                                                                                            "name": "master"
                                                                                        },
                                                                                        "computed": false,
                                                                                        "value": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "MemberExpression",
                                                                                                    "computed": false,
                                                                                                    "object": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "library"
                                                                                                    },
                                                                                                    "property": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "config"
                                                                                                    }
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "dapp"
                                                                                                }
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "masterpassword"
                                                                                            }
                                                                                        },
                                                                                        "kind": "init",
                                                                                        "method": false,
                                                                                        "shorthand": false
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "FunctionExpression",
                                                                                "id": null,
                                                                                "params": [
                                                                                    {
                                                                                        "type": "Identifier",
                                                                                        "name": "err"
                                                                                    }
                                                                                ],
                                                                                "defaults": [],
                                                                                "body": {
                                                                                    "type": "BlockStatement",
                                                                                    "body": [
                                                                                        {
                                                                                            "type": "ExpressionStatement",
                                                                                            "expression": {
                                                                                                "type": "CallExpression",
                                                                                                "callee": {
                                                                                                    "type": "MemberExpression",
                                                                                                    "computed": false,
                                                                                                    "object": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "console"
                                                                                                    },
                                                                                                    "property": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "log"
                                                                                                    }
                                                                                                },
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "type": "BinaryExpression",
                                                                                                        "operator": "+",
                                                                                                        "left": {
                                                                                                            "type": "Literal",
                                                                                                            "value": "Launched ",
                                                                                                            "raw": "\"Launched \""
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "type": "MemberExpression",
                                                                                                            "computed": false,
                                                                                                            "object": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "dapp"
                                                                                                            },
                                                                                                            "property": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "dappid"
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    {
                                                                                                        "type": "LogicalExpression",
                                                                                                        "operator": "||",
                                                                                                        "left": {
                                                                                                            "type": "Identifier",
                                                                                                            "name": "err"
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "type": "Literal",
                                                                                                            "value": "successfully",
                                                                                                            "raw": "\"successfully\""
                                                                                                        }
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            "type": "ExpressionStatement",
                                                                                            "expression": {
                                                                                                "type": "CallExpression",
                                                                                                "callee": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "cb"
                                                                                                },
                                                                                                "arguments": []
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "generator": false,
                                                                                "expression": false
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "generator": false,
                                                        "expression": false
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "alternate": null
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "Identifier",
                            "name": "DApps"
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "prototype"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "onNewBlock"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "block"
                        },
                        {
                            "type": "Identifier",
                            "name": "broadcast"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "Object"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "keys"
                                                }
                                            },
                                            "arguments": [
                                                {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "privated"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "sandboxes"
                                                    }
                                                }
                                            ]
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "forEach"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "dappId"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "ExpressionStatement",
                                                        "expression": {
                                                            "type": "LogicalExpression",
                                                            "operator": "&&",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "broadcast"
                                                            },
                                                            "right": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "self"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "request"
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "Identifier",
                                                                        "name": "dappId"
                                                                    },
                                                                    {
                                                                        "type": "Literal",
                                                                        "value": "post",
                                                                        "raw": "\"post\""
                                                                    },
                                                                    {
                                                                        "type": "Literal",
                                                                        "value": "/message",
                                                                        "raw": "\"/message\""
                                                                    },
                                                                    {
                                                                        "type": "ObjectExpression",
                                                                        "properties": [
                                                                            {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                    "type": "Identifier",
                                                                                    "name": "topic"
                                                                                },
                                                                                "computed": false,
                                                                                "value": {
                                                                                    "type": "Literal",
                                                                                    "value": "point",
                                                                                    "raw": "\"point\""
                                                                                },
                                                                                "kind": "init",
                                                                                "method": false,
                                                                                "shorthand": false
                                                                            },
                                                                            {
                                                                                "type": "Property",
                                                                                "key": {
                                                                                    "type": "Identifier",
                                                                                    "name": "message"
                                                                                },
                                                                                "computed": false,
                                                                                "value": {
                                                                                    "type": "ObjectExpression",
                                                                                    "properties": [
                                                                                        {
                                                                                            "type": "Property",
                                                                                            "key": {
                                                                                                "type": "Identifier",
                                                                                                "name": "id"
                                                                                            },
                                                                                            "computed": false,
                                                                                            "value": {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "block"
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "id"
                                                                                                }
                                                                                            },
                                                                                            "kind": "init",
                                                                                            "method": false,
                                                                                            "shorthand": false
                                                                                        },
                                                                                        {
                                                                                            "type": "Property",
                                                                                            "key": {
                                                                                                "type": "Identifier",
                                                                                                "name": "height"
                                                                                            },
                                                                                            "computed": false,
                                                                                            "value": {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "block"
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "height"
                                                                                                }
                                                                                            },
                                                                                            "kind": "init",
                                                                                            "method": false,
                                                                                            "shorthand": false
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "kind": "init",
                                                                                "method": false,
                                                                                "shorthand": false
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "type": "FunctionExpression",
                                                                        "id": null,
                                                                        "params": [
                                                                            {
                                                                                "type": "Identifier",
                                                                                "name": "err"
                                                                            }
                                                                        ],
                                                                        "defaults": [],
                                                                        "body": {
                                                                            "type": "BlockStatement",
                                                                            "body": [
                                                                                {
                                                                                    "type": "IfStatement",
                                                                                    "test": {
                                                                                        "type": "Identifier",
                                                                                        "name": "err"
                                                                                    },
                                                                                    "consequent": {
                                                                                        "type": "BlockStatement",
                                                                                        "body": [
                                                                                            {
                                                                                                "type": "ExpressionStatement",
                                                                                                "expression": {
                                                                                                    "type": "CallExpression",
                                                                                                    "callee": {
                                                                                                        "type": "MemberExpression",
                                                                                                        "computed": false,
                                                                                                        "object": {
                                                                                                            "type": "MemberExpression",
                                                                                                            "computed": false,
                                                                                                            "object": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "library"
                                                                                                            },
                                                                                                            "property": {
                                                                                                                "type": "Identifier",
                                                                                                                "name": "logger"
                                                                                                            }
                                                                                                        },
                                                                                                        "property": {
                                                                                                            "type": "Identifier",
                                                                                                            "name": "error"
                                                                                                        }
                                                                                                    },
                                                                                                    "arguments": [
                                                                                                        {
                                                                                                            "type": "Literal",
                                                                                                            "value": "onNewBlock message",
                                                                                                            "raw": "\"onNewBlock message\""
                                                                                                        },
                                                                                                        {
                                                                                                            "type": "Identifier",
                                                                                                            "name": "err"
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    "alternate": null
                                                                                }
                                                                            ]
                                                                        },
                                                                        "generator": false,
                                                                        "expression": false
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "shared"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "getGenesis"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "req"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "library"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "dbLite"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "query"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "Literal",
                                                    "value": "SELECT b.height, b.id, GROUP_CONCAT(m.dependentId), t.senderId FROM trs t ",
                                                    "raw": "\"SELECT b.height, b.id, GROUP_CONCAT(m.dependentId), t.senderId FROM trs t \""
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": "inner join blocks b on t.blockId = b.id and t.id = $id ",
                                                    "raw": "\"inner join blocks b on t.blockId = b.id and t.id = $id \""
                                                }
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": "left outer join mem_accounts2multisignatures m on m.accountId = t.senderId and t.id = $id",
                                                "raw": "\"left outer join mem_accounts2multisignatures m on m.accountId = t.senderId and t.id = $id\""
                                            }
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": [
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "id"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "Identifier",
                                                            "name": "req"
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "dappid"
                                                        }
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                }
                                            ]
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": [
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "height"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "Number"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                },
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "id"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "String"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                },
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "multisignature"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "String"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                },
                                                {
                                                    "type": "Property",
                                                    "key": {
                                                        "type": "Identifier",
                                                        "name": "authorId"
                                                    },
                                                    "computed": false,
                                                    "value": {
                                                        "type": "Identifier",
                                                        "name": "String"
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "shorthand": false
                                                }
                                            ]
                                        },
                                        {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [
                                                {
                                                    "type": "Identifier",
                                                    "name": "err"
                                                },
                                                {
                                                    "type": "Identifier",
                                                    "name": "rows"
                                                }
                                            ],
                                            "defaults": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [
                                                    {
                                                        "type": "IfStatement",
                                                        "test": {
                                                            "type": "LogicalExpression",
                                                            "operator": "||",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "err"
                                                            },
                                                            "right": {
                                                                "type": "BinaryExpression",
                                                                "operator": "==",
                                                                "left": {
                                                                    "type": "MemberExpression",
                                                                    "computed": false,
                                                                    "object": {
                                                                        "type": "Identifier",
                                                                        "name": "rows"
                                                                    },
                                                                    "property": {
                                                                        "type": "Identifier",
                                                                        "name": "length"
                                                                    }
                                                                },
                                                                "right": {
                                                                    "type": "Literal",
                                                                    "value": 0,
                                                                    "raw": "0"
                                                                }
                                                            }
                                                        },
                                                        "consequent": {
                                                            "type": "BlockStatement",
                                                            "body": [
                                                                {
                                                                    "type": "ReturnStatement",
                                                                    "argument": {
                                                                        "type": "CallExpression",
                                                                        "callee": {
                                                                            "type": "Identifier",
                                                                            "name": "cb"
                                                                        },
                                                                        "arguments": [
                                                                            {
                                                                                "type": "Literal",
                                                                                "value": "Database error",
                                                                                "raw": "\"Database error\""
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "alternate": null
                                                    },
                                                    {
                                                        "type": "ExpressionStatement",
                                                        "expression": {
                                                            "type": "CallExpression",
                                                            "callee": {
                                                                "type": "Identifier",
                                                                "name": "cb"
                                                            },
                                                            "arguments": [
                                                                {
                                                                    "type": "Literal",
                                                                    "value": null,
                                                                    "raw": "null"
                                                                },
                                                                {
                                                                    "type": "ObjectExpression",
                                                                    "properties": [
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "pointId"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": true,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "rows"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Literal",
                                                                                        "value": 0,
                                                                                        "raw": "0"
                                                                                    }
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "id"
                                                                                }
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "pointHeight"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": true,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "rows"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Literal",
                                                                                        "value": 0,
                                                                                        "raw": "0"
                                                                                    }
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "height"
                                                                                }
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "authorId"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": true,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "rows"
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Literal",
                                                                                        "value": 0,
                                                                                        "raw": "0"
                                                                                    }
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "authorId"
                                                                                }
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "dappid"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "Identifier",
                                                                                    "name": "req"
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "dappid"
                                                                                }
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        },
                                                                        {
                                                                            "type": "Property",
                                                                            "key": {
                                                                                "type": "Identifier",
                                                                                "name": "associate"
                                                                            },
                                                                            "computed": false,
                                                                            "value": {
                                                                                "type": "ConditionalExpression",
                                                                                "test": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": true,
                                                                                        "object": {
                                                                                            "type": "Identifier",
                                                                                            "name": "rows"
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Literal",
                                                                                            "value": 0,
                                                                                            "raw": "0"
                                                                                        }
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "multisignature"
                                                                                    }
                                                                                },
                                                                                "consequent": {
                                                                                    "type": "CallExpression",
                                                                                    "callee": {
                                                                                        "type": "MemberExpression",
                                                                                        "computed": false,
                                                                                        "object": {
                                                                                            "type": "MemberExpression",
                                                                                            "computed": false,
                                                                                            "object": {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": true,
                                                                                                "object": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "rows"
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Literal",
                                                                                                    "value": 0,
                                                                                                    "raw": "0"
                                                                                                }
                                                                                            },
                                                                                            "property": {
                                                                                                "type": "Identifier",
                                                                                                "name": "multisignature"
                                                                                            }
                                                                                        },
                                                                                        "property": {
                                                                                            "type": "Identifier",
                                                                                            "name": "split"
                                                                                        }
                                                                                    },
                                                                                    "arguments": [
                                                                                        {
                                                                                            "type": "Literal",
                                                                                            "value": ",",
                                                                                            "raw": "\",\""
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "alternate": {
                                                                                    "type": "ArrayExpression",
                                                                                    "elements": []
                                                                                }
                                                                            },
                                                                            "kind": "init",
                                                                            "method": false,
                                                                            "shorthand": false
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            "generator": false,
                                            "expression": false
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "shared"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "setReady"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "req"
                        },
                        {
                            "type": "Identifier",
                            "name": "cb"
                        }
                    ],
                    "defaults": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "privated"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "dappready"
                                            }
                                        },
                                        "property": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "req"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "dappid"
                                            }
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": true,
                                        "raw": "true"
                                    }
                                }
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "cb"
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": null,
                                            "raw": "null"
                                        },
                                        {
                                            "type": "ObjectExpression",
                                            "properties": []
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "module"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "exports"
                    }
                },
                "right": {
                    "type": "Identifier",
                    "name": "DApps"
                }
            }
        }
    ],
    "sourceType": "script"
}