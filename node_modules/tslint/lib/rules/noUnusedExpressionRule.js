/**
 * @license
 * Copyright 2014 Palantir Technologies, Inc.
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
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var utils_1 = require("../language/utils");
var ALLOW_FAST_NULL_CHECKS = "allow-fast-null-checks";
var ALLOW_NEW = "allow-new";
var ALLOW_TAGGED_TEMPLATE = "allow-tagged-template";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoUnusedExpressionWalker(sourceFile, this.ruleName, {
            allowFastNullChecks: this.ruleArguments.indexOf(ALLOW_FAST_NULL_CHECKS) !== -1,
            allowNew: this.ruleArguments.indexOf(ALLOW_NEW) !== -1,
            allowTaggedTemplate: this.ruleArguments.indexOf(ALLOW_TAGGED_TEMPLATE) !== -1,
        }));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-unused-expression",
    description: "Disallows unused expression statements.",
    descriptionDetails: (_a = ["\n            Unused expressions are expression statements which are not assignments or function calls\n            (and thus usually no-ops)."], _a.raw = ["\n            Unused expressions are expression statements which are not assignments or function calls\n            (and thus usually no-ops)."], Lint.Utils.dedent(_a)),
    rationale: (_b = ["\n            Detects potential errors where an assignment or function call was intended."], _b.raw = ["\n            Detects potential errors where an assignment or function call was intended."], Lint.Utils.dedent(_b)),
    optionsDescription: (_c = ["\n            Two arguments may be optionally provided:\n\n            * `", "` allows to use logical operators to perform fast null checks and perform\n            method or function calls for side effects (e.g. `e && e.preventDefault()`).\n            * `", "` allows 'new' expressions for side effects (e.g. `new ModifyGlobalState();`.\n            * `", "` allows tagged templates for side effects (e.g. `this.add\\`foo\\`;`."], _c.raw = ["\n            Two arguments may be optionally provided:\n\n            * \\`", "\\` allows to use logical operators to perform fast null checks and perform\n            method or function calls for side effects (e.g. \\`e && e.preventDefault()\\`).\n            * \\`", "\\` allows 'new' expressions for side effects (e.g. \\`new ModifyGlobalState();\\`.\n            * \\`", "\\` allows tagged templates for side effects (e.g. \\`this.add\\\\\\`foo\\\\\\`;\\`."], Lint.Utils.dedent(_c, ALLOW_FAST_NULL_CHECKS, ALLOW_NEW, ALLOW_TAGGED_TEMPLATE)),
    options: {
        type: "array",
        items: {
            type: "string",
            enum: [ALLOW_FAST_NULL_CHECKS],
        },
        minLength: 0,
        maxLength: 1,
    },
    optionExamples: ["true", "[true, \"" + ALLOW_FAST_NULL_CHECKS + "\"]"],
    type: "functionality",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "unused expression, expected an assignment or function call";
exports.Rule = Rule;
var NoUnusedExpressionWalker = (function (_super) {
    __extends(NoUnusedExpressionWalker, _super);
    function NoUnusedExpressionWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoUnusedExpressionWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (tsutils_1.isExpressionStatement(node)) {
                if (!isDirective(node) && _this.isUnusedExpression(node.expression)) {
                    _this.reportFailure(node);
                }
            }
            else if (tsutils_1.isVoidExpression(node)) {
                // allow `void 0`
                if (!isLiteralZero(node.expression) && _this.isUnusedExpression(node.expression)) {
                    _this.reportFailure(node.expression);
                }
            }
            else if (tsutils_1.isBinaryExpression(node)) {
                if (node.operatorToken.kind === ts.SyntaxKind.CommaToken) {
                    // allow indirect eval: `(0, eval)("code");`
                    if (!isIndirectEval(node) && _this.isUnusedExpression(node.left)) {
                        _this.reportFailure(node.left);
                    }
                }
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    NoUnusedExpressionWalker.prototype.reportFailure = function (node) {
        var start = node.getStart(this.sourceFile);
        var end = node.end;
        // don't add a new failure if it is contained in another failure's span
        for (var _i = 0, _a = this.failures; _i < _a.length; _i++) {
            var failure = _a[_i];
            if (failure.getStartPosition().getPosition() <= start &&
                failure.getEndPosition().getPosition() >= end) {
                return;
            }
        }
        this.addFailure(start, end, Rule.FAILURE_STRING);
    };
    NoUnusedExpressionWalker.prototype.isUnusedExpression = function (expression) {
        expression = utils_1.unwrapParentheses(expression);
        switch (expression.kind) {
            case ts.SyntaxKind.CallExpression:
            case ts.SyntaxKind.YieldExpression:
            case ts.SyntaxKind.DeleteExpression:
            case ts.SyntaxKind.AwaitExpression:
            case ts.SyntaxKind.PostfixUnaryExpression:
                return false;
            case ts.SyntaxKind.NewExpression:
                return !this.options.allowNew;
            case ts.SyntaxKind.TaggedTemplateExpression:
                return !this.options.allowTaggedTemplate;
            default:
        }
        if (tsutils_1.isPrefixUnaryExpression(expression) &&
            (expression.operator === ts.SyntaxKind.PlusPlusToken || expression.operator === ts.SyntaxKind.MinusMinusToken)) {
            return false;
        }
        if (tsutils_1.isConditionalExpression(expression)) {
            return this.isUnusedExpression(expression.whenTrue) || this.isUnusedExpression(expression.whenFalse);
        }
        if (tsutils_1.isBinaryExpression(expression)) {
            var operatorKind = expression.operatorToken.kind;
            if (tsutils_1.isAssignmentKind(operatorKind)) {
                return false;
            }
            if (this.options.allowFastNullChecks &&
                (operatorKind === ts.SyntaxKind.AmpersandAmpersandToken || operatorKind === ts.SyntaxKind.BarBarToken)) {
                return this.isUnusedExpression(expression.right);
            }
            else if (operatorKind === ts.SyntaxKind.CommaToken) {
                return this.isUnusedExpression(expression.left) || this.isUnusedExpression(expression.right);
            }
        }
        return true;
    };
    return NoUnusedExpressionWalker;
}(Lint.AbstractWalker));
function isLiteralZero(node) {
    return tsutils_1.isNumericLiteral(node) && node.text === "0";
}
function isIndirectEval(node) {
    return tsutils_1.isIdentifier(node.right) && node.right.text === "eval" &&
        isLiteralZero(node.left) &&
        node.parent.kind === ts.SyntaxKind.ParenthesizedExpression &&
        node.parent.parent.kind === ts.SyntaxKind.CallExpression;
}
function isDirective(node) {
    if (node.expression.kind !== ts.SyntaxKind.StringLiteral || !canContainDirective(node.parent)) {
        return false;
    }
    var parent = node.parent;
    // check if all previous statements in block are also directives
    for (var i = parent.statements.indexOf(node) - 1; i >= 0; --i) {
        var statement = parent.statements[i];
        if (!tsutils_1.isExpressionStatement(statement) || statement.expression.kind !== ts.SyntaxKind.StringLiteral) {
            return false;
        }
    }
    return true;
}
function canContainDirective(node) {
    switch (node.kind) {
        case ts.SyntaxKind.SourceFile:
        case ts.SyntaxKind.ModuleBlock:
            return true;
        case ts.SyntaxKind.Block:
            switch (node.parent.kind) {
                case ts.SyntaxKind.ArrowFunction:
                case ts.SyntaxKind.FunctionExpression:
                case ts.SyntaxKind.FunctionDeclaration:
                case ts.SyntaxKind.MethodDeclaration:
                case ts.SyntaxKind.Constructor:
                case ts.SyntaxKind.GetAccessor:
                case ts.SyntaxKind.SetAccessor:
                    return true;
                default:
                    return false;
            }
        default:
            return false;
    }
}
var _a, _b, _c;
