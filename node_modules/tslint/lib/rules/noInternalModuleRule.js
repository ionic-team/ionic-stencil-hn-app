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
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoInternalModuleWalker(sourceFile, this.ruleName, undefined));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-internal-module",
    description: "Disallows internal `module`",
    rationale: "Using `module` leads to a confusion of concepts with external modules. Use the newer `namespace` keyword instead.",
    optionsDescription: "Not configurable.",
    options: null,
    optionExamples: ["true"],
    type: "typescript",
    typescriptOnly: true,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "The internal 'module' syntax is deprecated, use the 'namespace' keyword instead.";
exports.Rule = Rule;
var NoInternalModuleWalker = (function (_super) {
    __extends(NoInternalModuleWalker, _super);
    function NoInternalModuleWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoInternalModuleWalker.prototype.walk = function (sourceFile) {
        return this.checkStatements(sourceFile.statements);
    };
    NoInternalModuleWalker.prototype.checkStatements = function (statements) {
        for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
            var statement = statements_1[_i];
            if (statement.kind === ts.SyntaxKind.ModuleDeclaration) {
                this.checkModuleDeclaration(statement);
            }
        }
    };
    NoInternalModuleWalker.prototype.checkModuleDeclaration = function (node, nested) {
        if (!nested &&
            node.name.kind === ts.SyntaxKind.Identifier &&
            // augmenting global uses a special syntax that is allowed
            // see https://github.com/Microsoft/TypeScript/pull/6213
            node.name.text !== "global") {
            var moduleKeyword = tsutils_1.getChildOfKind(node, ts.SyntaxKind.ModuleKeyword, this.sourceFile);
            if (moduleKeyword) {
                this.addFailureAtNode(moduleKeyword, Rule.FAILURE_STRING);
            }
        }
        if (node.body !== undefined) {
            switch (node.body.kind) {
                case ts.SyntaxKind.ModuleBlock:
                    return this.checkStatements(node.body.statements);
                case ts.SyntaxKind.ModuleDeclaration:
                    return this.checkModuleDeclaration(node.body, true);
            }
        }
    };
    return NoInternalModuleWalker;
}(Lint.AbstractWalker));
