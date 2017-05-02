/**
 * @license
 * Copyright 2017 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithFunction(sourceFile, function (ctx) { return walk(ctx, program.getTypeChecker()); });
    };
    return Rule;
}(Lint.Rules.TypedRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-unsafe-any",
    description: (_a = ["\n            Warns when using an expression of type 'any' in a dynamic way.\n            Uses are only allowed if they would work for `{} | null | undefined`.\n            Type casts and tests are allowed.\n            Expressions that work on all values (such as `\"\" + x`) are allowed."], _a.raw = ["\n            Warns when using an expression of type 'any' in a dynamic way.\n            Uses are only allowed if they would work for \\`{} | null | undefined\\`.\n            Type casts and tests are allowed.\n            Expressions that work on all values (such as \\`\"\" + x\\`) are allowed."], Lint.Utils.dedent(_a)),
    optionsDescription: "Not configurable.",
    options: null,
    optionExamples: ["true"],
    type: "functionality",
    typescriptOnly: true,
    requiresTypeInfo: true,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "Unsafe use of expression of type 'any'.";
exports.Rule = Rule;
function walk(ctx, checker) {
    if (ctx.sourceFile.isDeclarationFile) {
        // Not possible in a declaration file.
        return;
    }
    return ts.forEachChild(ctx.sourceFile, cb);
    /** @param anyOk If true, this node will be allowed to be of type *any*. (But its children might not.) */
    function cb(node, anyOk) {
        switch (node.kind) {
            case ts.SyntaxKind.ParenthesizedExpression:
                // Don't warn on a parenthesized expression, warn on its contents.
                return cb(node.expression, anyOk);
            case ts.SyntaxKind.Parameter: {
                var _a = node, type = _a.type, initializer = _a.initializer;
                if (initializer !== undefined) {
                    return cb(initializer, /*anyOk*/ type !== undefined && type.kind === ts.SyntaxKind.AnyKeyword);
                }
                return;
            }
            // Ignore types
            case ts.SyntaxKind.InterfaceDeclaration:
            case ts.SyntaxKind.TypeAliasDeclaration:
            case ts.SyntaxKind.QualifiedName:
            case ts.SyntaxKind.TypePredicate:
            case ts.SyntaxKind.TypeOfExpression:
            // Ignore imports
            case ts.SyntaxKind.ImportEqualsDeclaration:
            case ts.SyntaxKind.ImportDeclaration:
            case ts.SyntaxKind.ExportDeclaration:
            // For some reason, these are of type "any".
            case ts.SyntaxKind.StringLiteral:
                return;
            // Recurse through these, but ignore the immediate child because it is allowed to be 'any'.
            case ts.SyntaxKind.ExpressionStatement:
            case ts.SyntaxKind.TypeAssertionExpression:
            case ts.SyntaxKind.AsExpression:
            case ts.SyntaxKind.TemplateSpan: // Allow stringification (works on all values). Note: tagged templates handled differently.
            case ts.SyntaxKind.ThrowStatement: {
                var expression = node.expression;
                return cb(expression, /*anyOk*/ true);
            }
            case ts.SyntaxKind.PropertyDeclaration: {
                var _b = node, name = _b.name, initializer = _b.initializer;
                if (initializer !== undefined) {
                    return cb(initializer, /*anyOk*/ isNodeAny(name, checker));
                }
                return;
            }
            case ts.SyntaxKind.TaggedTemplateExpression: {
                var _c = node, tag = _c.tag, template = _c.template;
                cb(tag);
                if (template.kind === ts.SyntaxKind.TemplateExpression) {
                    for (var _i = 0, _d = template.templateSpans; _i < _d.length; _i++) {
                        var expression = _d[_i].expression;
                        checkContextual(expression);
                    }
                }
                // Also check the template expression itself
                check();
                return;
            }
            case ts.SyntaxKind.CallExpression:
            case ts.SyntaxKind.NewExpression: {
                var _e = node, expression = _e.expression, args = _e.arguments;
                cb(expression);
                for (var _f = 0, args_1 = args; _f < args_1.length; _f++) {
                    var arg = args_1[_f];
                    checkContextual(arg);
                }
                // Also check the call expression itself
                check();
                return;
            }
            case ts.SyntaxKind.PropertyAccessExpression:
                // Don't warn for right hand side; this is redundant if we warn for the access itself.
                cb(node.expression);
                check();
                return;
            case ts.SyntaxKind.VariableDeclaration:
                return checkVariableDeclaration(node);
            case ts.SyntaxKind.BinaryExpression:
                return checkBinaryExpression(node);
            case ts.SyntaxKind.ReturnStatement: {
                var expression = node.expression;
                if (expression) {
                    return checkContextual(expression);
                }
                return;
            }
            default:
                if (!(ts.isExpression(node) && check())) {
                    return ts.forEachChild(node, cb);
                }
                return;
        }
        function check() {
            var isUnsafe = !anyOk && isNodeAny(node, checker);
            if (isUnsafe) {
                ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
            return isUnsafe;
        }
    }
    /** OK for this value to be 'any' if that's its contextual type. */
    function checkContextual(arg) {
        return cb(arg, /*anyOk*/ isAny(checker.getContextualType(arg)));
    }
    // Allow `const x = foo;` and `const x: any = foo`, but not `const x: Foo = foo;`.
    function checkVariableDeclaration(_a) {
        var type = _a.type, initializer = _a.initializer;
        // Always allow the LHS to be `any`. Just don't allow RHS to be `any` when LHS isn't.
        // TODO: handle destructuring
        if (initializer !== undefined) {
            return cb(initializer, /*anyOk*/ type === undefined || type.kind === ts.SyntaxKind.AnyKeyword);
        }
        return;
    }
    function checkBinaryExpression(node) {
        var _a = node, left = _a.left, right = _a.right, operatorToken = _a.operatorToken;
        // Allow equality since all values support equality.
        if (Lint.getEqualsKind(operatorToken) !== undefined) {
            return;
        }
        switch (operatorToken.kind) {
            case ts.SyntaxKind.InstanceOfKeyword:
                return cb(right);
            case ts.SyntaxKind.CommaToken:
                cb(left, /*anyOk*/ true);
                return cb(right, /*anyOk*/ true);
            case ts.SyntaxKind.EqualsToken:
                // Allow assignment if the lhs is also *any*.
                // TODO: handle destructuring
                cb(right, /*anyOk*/ isNodeAny(left, checker));
                return;
            case ts.SyntaxKind.PlusToken: // Allow implicit stringification
            case ts.SyntaxKind.PlusEqualsToken:
                var anyOk = isStringLike(left, checker)
                    || (isStringLike(right, checker) && operatorToken.kind === ts.SyntaxKind.PlusToken);
                cb(left, anyOk);
                return cb(right, anyOk);
            default:
                cb(left);
                return cb(right);
        }
    }
}
function isNodeAny(node, checker) {
    return isAny(checker.getTypeAtLocation(node));
}
function isStringLike(expr, checker) {
    return Lint.isTypeFlagSet(checker.getTypeAtLocation(expr), ts.TypeFlags.StringLike);
}
function isAny(type) {
    return type !== undefined && Lint.isTypeFlagSet(type, ts.TypeFlags.Any);
}
var _a;
