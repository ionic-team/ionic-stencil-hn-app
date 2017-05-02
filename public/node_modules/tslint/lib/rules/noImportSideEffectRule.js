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
var Lint = require("../index");
var OPTION_IGNORE_MODULE = "ignore-module";
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var patternConfig = this.ruleArguments[this.ruleArguments.length - 1];
        var ignorePattern = patternConfig && new RegExp(patternConfig[OPTION_IGNORE_MODULE]);
        return this.applyWithFunction(sourceFile, walk, ignorePattern);
    };
    return Rule;
}(Lint.Rules.AbstractRule));
Rule.metadata = {
    description: "Avoid import statements with side-effect.",
    optionExamples: ["true", "[true, { \"" + OPTION_IGNORE_MODULE + "\": \"(\\.html|\\.css)$\" }]"],
    options: {
        items: {
            properties: {
                "ignore-module": {
                    type: "string",
                },
            },
            type: "object",
        },
        maxLength: 1,
        minLength: 0,
        type: "array",
    },
    optionsDescription: (_a = ["\n            One argument may be optionally provided:\n\n            * `", "` allows to specify a regex and ignore modules which it matches."], _a.raw = ["\n            One argument may be optionally provided:\n\n            * \\`", "\\` allows to specify a regex and ignore modules which it matches."], Lint.Utils.dedent(_a, OPTION_IGNORE_MODULE)),
    rationale: "Imports with side effects may have behavior which is hard for static verification.",
    ruleName: "no-import-side-effect",
    type: "typescript",
    typescriptOnly: false,
};
Rule.FAILURE_STRING = "import with explicit side-effect";
exports.Rule = Rule;
function walk(ctx) {
    var ignorePattern = ctx.options, sourceFile = ctx.sourceFile;
    for (var _i = 0, _a = sourceFile.statements; _i < _a.length; _i++) {
        var statement = _a[_i];
        if (!utils.isImportDeclaration(statement)) {
            continue;
        }
        var importClause = statement.importClause, moduleSpecifier = statement.moduleSpecifier;
        if (importClause || !utils.isStringLiteral(moduleSpecifier)) {
            continue;
        }
        if (!ignorePattern || !ignorePattern.test(moduleSpecifier.text)) {
            ctx.addFailureAtNode(statement, Rule.FAILURE_STRING);
        }
    }
}
var _a;
