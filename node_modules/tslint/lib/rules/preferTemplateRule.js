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
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var OPTION_SINGLE_CONCAT = "allow-single-concat";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        if (sourceFile.isDeclarationFile) {
            return []; // Not possible in a declaration file
        }
        var allowSingleConcat = this.ruleArguments.indexOf(OPTION_SINGLE_CONCAT) !== -1;
        return this.applyWithFunction(sourceFile, function (ctx) { return walk(ctx, allowSingleConcat); });
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "prefer-template",
    description: "Prefer a template expression over string literal concatenation.",
    optionsDescription: (_a = ["\n            If `", "` is specified, then a single concatenation (`x + y`) is allowed, but not more (`x + y + z`)."], _a.raw = ["\n            If \\`", "\\` is specified, then a single concatenation (\\`x + y\\`) is allowed, but not more (\\`x + y + z\\`)."], Lint.Utils.dedent(_a, OPTION_SINGLE_CONCAT)),
    options: {
        type: "string",
        enum: [OPTION_SINGLE_CONCAT],
    },
    optionExamples: ["true", "[true, \"" + OPTION_SINGLE_CONCAT + "\"]"],
    type: "style",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "Use a template literal instead of concatenating with a string literal.";
Rule.FAILURE_STRING_MULTILINE = "Use a multiline template literal instead of concatenating string literals with newlines.";
exports.Rule = Rule;
function walk(ctx, allowSingleConcat) {
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        var failure = getError(node, allowSingleConcat);
        if (failure) {
            ctx.addFailureAtNode(node, failure);
        }
        else {
            return ts.forEachChild(node, cb);
        }
    });
}
function getError(node, allowSingleConcat) {
    if (!isPlusExpression(node)) {
        return undefined;
    }
    var left = node.left, right = node.right;
    var l = isStringLike(left);
    var r = isStringLike(right);
    if (l && r) {
        // They're both strings.
        // If they're joined by a newline, recommend a template expression instead.
        // Otherwise ignore. ("a" + "b", probably writing a long newline-less string on many lines.)
        return containsNewline(left) || containsNewline(right) ? Rule.FAILURE_STRING_MULTILINE : undefined;
    }
    else if (!l && !r) {
        // Watch out for `"a" + b + c`.
        return containsAnyStringLiterals(left) ? Rule.FAILURE_STRING : undefined;
    }
    else if (l) {
        // `"x" + y`
        return !allowSingleConcat ? Rule.FAILURE_STRING : undefined;
    }
    else {
        // `? + "b"`
        return !allowSingleConcat || isPlusExpression(left) ? Rule.FAILURE_STRING : undefined;
    }
}
function containsNewline(node) {
    if (node.kind === ts.SyntaxKind.TemplateExpression) {
        return node.templateSpans.some(function (_a) {
            var text = _a.literal.text;
            return text.includes("\n");
        });
    }
    else {
        return node.text.includes("\n");
    }
}
function containsAnyStringLiterals(node) {
    if (!isPlusExpression(node)) {
        return false;
    }
    var left = node.left, right = node.right;
    return isStringLike(right) || isStringLike(left) || containsAnyStringLiterals(left);
}
function isPlusExpression(node) {
    return tsutils_1.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken;
}
function isStringLike(node) {
    switch (node.kind) {
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
        case ts.SyntaxKind.TemplateExpression:
            return true;
        default:
            return false;
    }
}
var _a;
