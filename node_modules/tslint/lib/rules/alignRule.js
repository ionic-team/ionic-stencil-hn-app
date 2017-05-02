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
var utils = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new AlignWalker(sourceFile, this.ruleName, {
            arguments: this.ruleArguments.indexOf(Rule.ARGUMENTS_OPTION) !== -1,
            parameters: this.ruleArguments.indexOf(Rule.PARAMETERS_OPTION) !== -1,
            statements: this.ruleArguments.indexOf(Rule.STATEMENTS_OPTION) !== -1,
        }));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "align",
    description: "Enforces vertical alignment.",
    hasFix: true,
    rationale: "Helps maintain a readable, consistent style in your codebase.",
    optionsDescription: (_a = ["\n            Three arguments may be optionally provided:\n\n            * `\"parameters\"` checks alignment of function parameters.\n            * `\"arguments\"` checks alignment of function call arguments.\n            * `\"statements\"` checks alignment of statements."], _a.raw = ["\n            Three arguments may be optionally provided:\n\n            * \\`\"parameters\"\\` checks alignment of function parameters.\n            * \\`\"arguments\"\\` checks alignment of function call arguments.\n            * \\`\"statements\"\\` checks alignment of statements."], Lint.Utils.dedent(_a)),
    options: {
        type: "array",
        items: {
            type: "string",
            enum: ["arguments", "parameters", "statements"],
        },
        minLength: 1,
        maxLength: 3,
    },
    optionExamples: ['[true, "parameters", "statements"]'],
    type: "style",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.PARAMETERS_OPTION = "parameters";
Rule.ARGUMENTS_OPTION = "arguments";
Rule.STATEMENTS_OPTION = "statements";
Rule.FAILURE_STRING_SUFFIX = " are not aligned";
exports.Rule = Rule;
var AlignWalker = (function (_super) {
    __extends(AlignWalker, _super);
    function AlignWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlignWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            if (_this.options.statements && utils.isBlockLike(node)) {
                _this.checkAlignment(node.statements, Rule.STATEMENTS_OPTION);
            }
            else if (_this.options.parameters) {
                switch (node.kind) {
                    case ts.SyntaxKind.FunctionDeclaration:
                    case ts.SyntaxKind.FunctionExpression:
                    case ts.SyntaxKind.Constructor:
                    case ts.SyntaxKind.MethodDeclaration:
                    case ts.SyntaxKind.ArrowFunction:
                    case ts.SyntaxKind.CallSignature:
                    case ts.SyntaxKind.ConstructSignature:
                    case ts.SyntaxKind.MethodSignature:
                    case ts.SyntaxKind.FunctionType:
                    case ts.SyntaxKind.ConstructorType:
                        _this.checkAlignment(node.parameters, Rule.PARAMETERS_OPTION);
                }
            }
            else if (_this.options.arguments &&
                (node.kind === ts.SyntaxKind.CallExpression ||
                    node.kind === ts.SyntaxKind.NewExpression && node.arguments !== undefined)) {
                _this.checkAlignment(node.arguments, Rule.ARGUMENTS_OPTION);
            }
            return ts.forEachChild(node, cb);
        };
        return cb(sourceFile);
    };
    AlignWalker.prototype.checkAlignment = function (nodes, kind) {
        if (nodes.length <= 1) {
            return;
        }
        var sourceFile = this.sourceFile;
        var pos = ts.getLineAndCharacterOfPosition(sourceFile, nodes[0].getStart(sourceFile));
        var alignToColumn = pos.character;
        var line = pos.line;
        // skip first node in list
        for (var i = 1; i < nodes.length; ++i) {
            var node = nodes[i];
            var start = node.getStart(sourceFile);
            pos = ts.getLineAndCharacterOfPosition(sourceFile, start);
            if (line !== pos.line && pos.character !== alignToColumn) {
                var diff = alignToColumn - pos.character;
                var fix = void 0;
                if (0 < diff) {
                    fix = Lint.Replacement.appendText(start, " ".repeat(diff));
                }
                else if (node.pos <= start + diff && /^\s+$/.test(sourceFile.text.substring(start + diff, start))) {
                    // only delete text if there is only whitespace
                    fix = Lint.Replacement.deleteText(start + diff, -diff);
                }
                this.addFailure(start, node.end, kind + Rule.FAILURE_STRING_SUFFIX, fix);
            }
            line = pos.line;
        }
    };
    return AlignWalker;
}(Lint.AbstractWalker));
var _a;
