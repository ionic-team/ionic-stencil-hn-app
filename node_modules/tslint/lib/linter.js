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
var fs = require("fs");
var path = require("path");
var ts = require("typescript");
var configuration_1 = require("./configuration");
var enableDisableRules_1 = require("./enableDisableRules");
var error_1 = require("./error");
var formatterLoader_1 = require("./formatterLoader");
var rule_1 = require("./language/rule/rule");
var utils = require("./language/utils");
var ruleLoader_1 = require("./ruleLoader");
var utils_1 = require("./utils");
/**
 * Linter that can lint multiple files in consecutive runs.
 */
var Linter = (function () {
    function Linter(options, program) {
        this.options = options;
        this.program = program;
        this.failures = [];
        this.fixes = [];
        if (typeof options !== "object") {
            throw new Error("Unknown Linter options type: " + typeof options);
        }
        if (options.configuration != null) {
            throw new Error("ILinterOptions does not contain the property `configuration` as of version 4. " +
                "Did you mean to pass the `IConfigurationFile` object to lint() ? ");
        }
    }
    /**
     * Creates a TypeScript program object from a tsconfig.json file path and optional project directory.
     */
    Linter.createProgram = function (configFile, projectDirectory) {
        if (projectDirectory === undefined) {
            projectDirectory = path.dirname(configFile);
        }
        var config = ts.readConfigFile(configFile, ts.sys.readFile).config;
        var parseConfigHost = {
            fileExists: fs.existsSync,
            readDirectory: ts.sys.readDirectory,
            readFile: function (file) { return fs.readFileSync(file, "utf8"); },
            useCaseSensitiveFileNames: true,
        };
        var parsed = ts.parseJsonConfigFileContent(config, parseConfigHost, projectDirectory);
        var host = ts.createCompilerHost(parsed.options, true);
        var program = ts.createProgram(parsed.fileNames, parsed.options, host);
        return program;
    };
    /**
     * Returns a list of source file names from a TypeScript program. This includes all referenced
     * files and excludes declaration (".d.ts") files.
     */
    Linter.getFileNames = function (program) {
        return program.getSourceFiles().map(function (s) { return s.fileName; }).filter(function (l) { return l.substr(-5) !== ".d.ts"; });
    };
    Linter.prototype.lint = function (fileName, source, configuration) {
        if (configuration === void 0) { configuration = configuration_1.DEFAULT_CONFIG; }
        var sourceFile = this.getSourceFile(fileName, source);
        var isJs = /\.jsx?$/i.test(fileName);
        var enabledRules = this.getEnabledRules(sourceFile, configuration, isJs);
        var hasLinterRun = false;
        var fileFailures = [];
        if (this.options.fix) {
            for (var _i = 0, enabledRules_1 = enabledRules; _i < enabledRules_1.length; _i++) {
                var rule = enabledRules_1[_i];
                var ruleFailures = this.applyRule(rule, sourceFile);
                source = this.applyFixes(fileName, source, ruleFailures);
                sourceFile = this.getSourceFile(fileName, source);
                fileFailures = fileFailures.concat(ruleFailures);
            }
            hasLinterRun = true;
        }
        // make a 1st pass or make a 2nd pass if there were any fixes because the positions may be off
        if (!hasLinterRun || this.fixes.length > 0) {
            fileFailures = [];
            for (var _a = 0, enabledRules_2 = enabledRules; _a < enabledRules_2.length; _a++) {
                var rule = enabledRules_2[_a];
                var ruleFailures = this.applyRule(rule, sourceFile);
                if (ruleFailures.length > 0) {
                    fileFailures = fileFailures.concat(ruleFailures);
                }
            }
        }
        this.failures = this.failures.concat(fileFailures);
        // add rule severity to failures
        var ruleSeverityMap = new Map(enabledRules.map(function (rule) {
            return [rule.getOptions().ruleName, rule.getOptions().ruleSeverity];
        }));
        for (var _b = 0, _c = this.failures; _b < _c.length; _b++) {
            var failure = _c[_b];
            var severity = ruleSeverityMap.get(failure.getRuleName());
            if (severity === undefined) {
                throw new Error("Severity for rule '" + failure.getRuleName() + " not found");
            }
            failure.setRuleSeverity(severity);
        }
    };
    Linter.prototype.getResult = function () {
        var formatter;
        var formattersDirectory = configuration_1.getRelativePath(this.options.formattersDirectory);
        var formatterName = this.options.formatter || "prose";
        var Formatter = formatterLoader_1.findFormatter(formatterName, formattersDirectory);
        if (Formatter) {
            formatter = new Formatter();
        }
        else {
            throw new Error("formatter '" + formatterName + "' not found");
        }
        var output = formatter.format(this.failures, this.fixes);
        var errorCount = this.failures.filter(function (failure) { return failure.getRuleSeverity() === "error"; }).length;
        return {
            errorCount: errorCount,
            failures: this.failures,
            fixes: this.fixes,
            format: formatterName,
            output: output,
            warningCount: this.failures.length - errorCount,
        };
    };
    // Applies fixes to the files where the failures are reported.
    // Returns the content of the source file which AST needs to be reloaded.
    Linter.prototype.applyFixes = function (sourceFilePath, sourceContent, ruleFailures) {
        var fixesPerFile = ruleFailures
            .reduce(function (accum, c) {
            var currentFileName = c.getFileName();
            var fix = c.getFix();
            if (fix) {
                accum[currentFileName] = accum[currentFileName] || [];
                accum[currentFileName].push(fix);
            }
            return accum;
        }, {});
        var hasFixes = Object.keys(fixesPerFile).length > 0;
        var result = sourceContent;
        if (hasFixes) {
            this.fixes = this.fixes.concat(ruleFailures);
            Object.keys(fixesPerFile).forEach(function (currentFileName) {
                var fixesForFile = fixesPerFile[currentFileName];
                var source = fs.readFileSync(currentFileName, { encoding: "utf-8" });
                source = rule_1.Replacement.applyFixes(source, fixesForFile);
                fs.writeFileSync(currentFileName, source, { encoding: "utf-8" });
                if (sourceFilePath === currentFileName) {
                    result = source;
                }
            });
        }
        return result;
    };
    Linter.prototype.applyRule = function (rule, sourceFile) {
        var ruleFailures = [];
        try {
            if (this.program && rule_1.isTypedRule(rule)) {
                ruleFailures = rule.applyWithProgram(sourceFile, this.program);
            }
            else {
                ruleFailures = rule.apply(sourceFile);
            }
        }
        catch (error) {
            if (error_1.isError(error)) {
                error_1.showWarningOnce("Warning: " + error.message);
            }
            else {
                console.warn("Warning: " + error);
            }
        }
        var fileFailures = [];
        for (var _i = 0, ruleFailures_1 = ruleFailures; _i < ruleFailures_1.length; _i++) {
            var ruleFailure = ruleFailures_1[_i];
            if (!this.containsRule(this.failures, ruleFailure)) {
                fileFailures.push(ruleFailure);
            }
        }
        return fileFailures;
    };
    Linter.prototype.getEnabledRules = function (sourceFile, configuration, isJs) {
        if (configuration === void 0) { configuration = configuration_1.DEFAULT_CONFIG; }
        var ruleOptionsList = configuration_1.convertRuleOptions(isJs ? configuration.jsRules : configuration.rules);
        // walk the code first to find all the intervals where rules are disabled
        var enableDisableRuleMap = new enableDisableRules_1.EnableDisableRulesWalker(sourceFile, ruleOptionsList).getEnableDisableRuleMap();
        var rulesDirectories = utils_1.arrayify(this.options.rulesDirectory)
            .concat(utils_1.arrayify(configuration.rulesDirectory));
        var configuredRules = ruleLoader_1.loadRules(ruleOptionsList, enableDisableRuleMap, rulesDirectories, isJs);
        return configuredRules.filter(function (r) { return r.isEnabled(); });
    };
    Linter.prototype.getSourceFile = function (fileName, source) {
        if (this.program) {
            var sourceFile = this.program.getSourceFile(fileName);
            if (sourceFile === undefined) {
                var INVALID_SOURCE_ERROR = (_a = ["\n                    Invalid source file: ", ". Ensure that the files supplied to lint have a .ts, .tsx, .js or .jsx extension.\n                "], _a.raw = ["\n                    Invalid source file: ", ". Ensure that the files supplied to lint have a .ts, .tsx, .js or .jsx extension.\n                "], utils_1.dedent(_a, fileName));
                throw new Error(INVALID_SOURCE_ERROR);
            }
            // check if the program has been type checked
            if (!("resolvedModules" in sourceFile)) {
                throw new Error("Program must be type checked before linting");
            }
            return sourceFile;
        }
        else {
            return utils.getSourceFile(fileName, source);
        }
        var _a;
    };
    Linter.prototype.containsRule = function (rules, rule) {
        return rules.some(function (r) { return r.equals(rule); });
    };
    return Linter;
}());
Linter.VERSION = "5.1.0";
Linter.findConfiguration = configuration_1.findConfiguration;
Linter.findConfigurationPath = configuration_1.findConfigurationPath;
Linter.getRulesDirectories = configuration_1.getRulesDirectories;
Linter.loadConfigurationFromPath = configuration_1.loadConfigurationFromPath;
module.exports = Linter;
