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
var u = require("tsutils");
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
    ruleName: "return-undefined",
    description: "Prefer `return;` in void functions and `return undefined;` in value-returning functions.",
    optionsDescription: "Not configurable.",
    options: null,
    optionExamples: ["true"],
    type: "style",
    typescriptOnly: false,
    requiresTypeInfo: true,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING_VALUE_RETURN = "Value-returning function should use `return undefined;`, not just `return;`.";
Rule.FAILURE_STRING_VOID_RETURN = "`void` function should use `return;`, not `return undefined;`.";
exports.Rule = Rule;
function walk(ctx, checker) {
    return ts.forEachChild(ctx.sourceFile, cb);
    function cb(node) {
        check(node);
        return ts.forEachChild(node, cb);
    }
    function check(node) {
        if (!u.isReturnStatement(node)) {
            return;
        }
        var actualReturnKind = returnKindFromReturn(node);
        if (actualReturnKind === undefined) {
            return;
        }
        var functionReturningFrom = Lint.ancestorWhere(node, isFunctionLike);
        if (!functionReturningFrom) {
            // Return outside of function is invalid
            return;
        }
        var returnKindFromType = getReturnKind(functionReturningFrom, checker);
        if (returnKindFromType !== undefined && returnKindFromType !== actualReturnKind) {
            ctx.addFailureAtNode(node, returnKindFromType === ReturnKind.Void ? Rule.FAILURE_STRING_VOID_RETURN : Rule.FAILURE_STRING_VALUE_RETURN);
        }
    }
}
function returnKindFromReturn(node) {
    if (!node.expression) {
        return ReturnKind.Void;
    }
    else if (u.isIdentifier(node.expression) && node.expression.text === "undefined") {
        return ReturnKind.Value;
    }
    else {
        return undefined;
    }
}
var ReturnKind;
(function (ReturnKind) {
    ReturnKind[ReturnKind["Void"] = 0] = "Void";
    ReturnKind[ReturnKind["Value"] = 1] = "Value";
})(ReturnKind || (ReturnKind = {}));
function getReturnKind(node, checker) {
    switch (node.kind) {
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.SetAccessor:
            return ReturnKind.Void;
        case ts.SyntaxKind.GetAccessor:
            return ReturnKind.Value;
        default:
    }
    // Go with an explicit type declaration if possible.
    if (node.type) {
        return node.type.kind === ts.SyntaxKind.VoidKeyword ? ReturnKind.Void : ReturnKind.Value;
    }
    var contextualType = node.kind === ts.SyntaxKind.FunctionExpression || node.kind === ts.SyntaxKind.ArrowFunction
        ? checker.getContextualType(node)
        : undefined;
    var ty = contextualType || checker.getTypeAtLocation(node);
    if (!ty) {
        // Type error somewhere. Bail.
        return undefined;
    }
    var sig = checker.getSignaturesOfType(ty, ts.SignatureKind.Call)[0];
    var returnType = checker.getReturnTypeOfSignature(sig);
    return Lint.isTypeFlagSet(returnType, ts.TypeFlags.Void) ? ReturnKind.Void : ReturnKind.Value;
}
function isFunctionLike(node) {
    switch (node.kind) {
        case ts.SyntaxKind.FunctionDeclaration:
        case ts.SyntaxKind.FunctionExpression:
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.MethodDeclaration:
        case ts.SyntaxKind.Constructor:
        case ts.SyntaxKind.GetAccessor:
        case ts.SyntaxKind.SetAccessor:
            return true;
        default:
            return false;
    }
}
