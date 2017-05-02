/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
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
var Lint = require("../index");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var text = sourceFile.text;
        // ignore shebang if it exists
        var offset = text.startsWith("#!") ? text.indexOf("\n") + 1 : 0;
        if (!textHasComment(text, offset, new RegExp(this.ruleArguments[0]))) {
            return [new Lint.RuleFailure(sourceFile, offset, offset, Rule.FAILURE_STRING, this.ruleName)];
        }
        return [];
    };
    return Rule;
}(Lint.Rules.AbstractRule));
/* tslint:disable:object-literal-sort-keys */
Rule.metadata = {
    ruleName: "file-header",
    description: "Enforces a certain header comment for all files, matched by a regular expression.",
    optionsDescription: "Regular expression to match the header.",
    options: {
        type: "string",
    },
    optionExamples: ['[true, "Copyright \\\\d{4}"]'],
    type: "style",
    typescriptOnly: false,
};
/* tslint:enable:object-literal-sort-keys */
Rule.FAILURE_STRING = "missing file header";
exports.Rule = Rule;
// match a single line or multi line comment with leading whitespace
// the wildcard dot does not match new lines - we can use [\s\S] instead
var commentRegexp = /^\s*(\/\/(.*)|\/\*([\s\S]*?)\*\/)/;
function textHasComment(text, offset, headerRegexp) {
    // check for a comment
    var match = commentRegexp.exec(text.slice(offset));
    if (match === null) {
        return false;
    }
    // either the third or fourth capture group contains the comment contents
    var comment = match[2] !== undefined ? match[2] : match[3];
    return comment.search(headerRegexp) !== -1;
}
