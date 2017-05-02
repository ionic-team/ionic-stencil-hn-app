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
var utils = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = function (moduleReference) {
        return "No need to reference \"" + moduleReference + "\", since it is imported.";
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "no-reference-import",
    description: 'Don\'t <reference types="foo" /> if you import "foo" anyway.',
    optionsDescription: "Not configurable.",
    options: null,
    type: "style",
    typescriptOnly: true,
};
exports.Rule = Rule;
function walk(ctx) {
    var sourceFile = ctx.sourceFile;
    if (sourceFile.typeReferenceDirectives.length === 0) {
        return;
    }
    var imports = allImports(sourceFile);
    for (var _i = 0, _a = sourceFile.typeReferenceDirectives; _i < _a.length; _i++) {
        var ref = _a[_i];
        if (imports.has(ref.fileName)) {
            ctx.addFailure(ref.pos, ref.end, Rule.FAILURE_STRING(ref.fileName));
        }
    }
}
function allImports(sourceFile) {
    var imports = new Set();
    for (var _i = 0, _a = sourceFile.statements; _i < _a.length; _i++) {
        var statement = _a[_i];
        recur(statement);
    }
    return imports;
    function recur(node) {
        if (utils.isImportEqualsDeclaration(node)) {
            var ref = node.moduleReference;
            if (ref.kind === ts.SyntaxKind.ExternalModuleReference) {
                if (ref.expression) {
                    addImport(ref.expression);
                }
            }
        }
        else if (utils.isImportDeclaration(node)) {
            addImport(node.moduleSpecifier);
        }
        else if (utils.isModuleDeclaration(node)) {
            if (!sourceFile.isDeclarationFile) {
                // Can't be any imports in a module augmentation.
                return;
            }
            var body = moduleDeclarationBody(node);
            if (body) {
                for (var _i = 0, _a = body.statements; _i < _a.length; _i++) {
                    var statement = _a[_i];
                    recur(statement);
                }
            }
        }
    }
    function addImport(moduleReference) {
        if (utils.isStringLiteral(moduleReference)) {
            imports.add(moduleReference.text);
        }
    }
}
function moduleDeclarationBody(node) {
    var body = node.body;
    while (body && body.kind === ts.SyntaxKind.ModuleDeclaration) {
        body = body.body;
    }
    return body && body.kind === ts.SyntaxKind.ModuleBlock ? body : undefined;
}
