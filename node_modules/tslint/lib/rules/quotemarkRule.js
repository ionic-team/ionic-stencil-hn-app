/**
 * @license
 * Copyright 2013 Palantir Technologies, Inc.
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
var OPTION_SINGLE = "single";
var OPTION_DOUBLE = "double";
var OPTION_JSX_SINGLE = "jsx-single";
var OPTION_JSX_DOUBLE = "jsx-double";
var OPTION_AVOID_ESCAPE = "avoid-escape";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = function (actual, expected) {
        return actual + " should be " + expected;
    };
    Rule.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && (this.ruleArguments[0] === OPTION_SINGLE || this.ruleArguments[0] === OPTION_DOUBLE);
    };
    Rule.prototype.apply = function (sourceFile) {
        var args = this.ruleArguments;
        var quoteMark = args[0] === OPTION_SINGLE ? "'" : '"';
        return this.applyWithFunction(sourceFile, walk, {
            quoteMark: quoteMark,
            avoidEscape: args.indexOf(OPTION_AVOID_ESCAPE) !== -1,
            jsxQuoteMark: args.indexOf(OPTION_JSX_SINGLE) !== -1
                ? "'"
                : args.indexOf(OPTION_JSX_DOUBLE) ? '"' : quoteMark,
        });
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "quotemark",
    description: "Requires single or double quotes for string literals.",
    hasFix: true,
    optionsDescription: (_a = ["\n            Five arguments may be optionally provided:\n\n            * `\"", "\"` enforces single quotes.\n            * `\"", "\"` enforces double quotes.\n            * `\"", "\"` enforces single quotes for JSX attributes.\n            * `\"", "\"` enforces double quotes for JSX attributes.\n            * `\"", "\"` allows you to use the \"other\" quotemark in cases where escaping would normally be required.\n            For example, `[true, \"", "\", \"", "\"]` would not report a failure on the string literal\n            `'Hello \"World\"'`."], _a.raw = ["\n            Five arguments may be optionally provided:\n\n            * \\`\"", "\"\\` enforces single quotes.\n            * \\`\"", "\"\\` enforces double quotes.\n            * \\`\"", "\"\\` enforces single quotes for JSX attributes.\n            * \\`\"", "\"\\` enforces double quotes for JSX attributes.\n            * \\`\"", "\"\\` allows you to use the \"other\" quotemark in cases where escaping would normally be required.\n            For example, \\`[true, \"", "\", \"", "\"]\\` would not report a failure on the string literal\n            \\`'Hello \"World\"'\\`."], Lint.Utils.dedent(_a, OPTION_SINGLE, OPTION_DOUBLE, OPTION_JSX_SINGLE, OPTION_JSX_DOUBLE, OPTION_AVOID_ESCAPE, OPTION_DOUBLE, OPTION_AVOID_ESCAPE)),
    options: {
        type: "array",
        items: {
            type: "string",
            enum: [OPTION_SINGLE, OPTION_DOUBLE, OPTION_JSX_SINGLE, OPTION_JSX_DOUBLE, OPTION_AVOID_ESCAPE],
        },
        minLength: 0,
        maxLength: 5,
    },
    optionExamples: [
        "[true, \"" + OPTION_SINGLE + "\", \"" + OPTION_AVOID_ESCAPE + "\"]",
        "[true, \"" + OPTION_SINGLE + "\", \"" + OPTION_JSX_DOUBLE + "\"]",
    ],
    type: "style",
    typescriptOnly: false,
};
exports.Rule = Rule;
function walk(ctx) {
    return ts.forEachChild(ctx.sourceFile, function cb(node) {
        if (node.kind === ts.SyntaxKind.StringLiteral) {
            var expectedQuoteMark = node.parent.kind === ts.SyntaxKind.JsxAttribute ? ctx.options.jsxQuoteMark : ctx.options.quoteMark;
            var actualQuoteMark = ctx.sourceFile.text[node.end - 1];
            if (actualQuoteMark === expectedQuoteMark) {
                return;
            }
            var start = node.getStart(ctx.sourceFile);
            var text = ctx.sourceFile.text.substring(start + 1, node.end - 1);
            if (node.text.includes(expectedQuoteMark)) {
                if (ctx.options.avoidEscape) {
                    return;
                }
                text = text.replace(new RegExp(expectedQuoteMark, "g"), "\\" + expectedQuoteMark);
            }
            text = text.replace(new RegExp("\\\\" + actualQuoteMark, "g"), actualQuoteMark);
            return ctx.addFailure(start, node.end, Rule.FAILURE_STRING(actualQuoteMark, expectedQuoteMark), new Lint.Replacement(start, node.end - start, expectedQuoteMark + text + expectedQuoteMark));
        }
        return ts.forEachChild(node, cb);
    });
}
var _a;
