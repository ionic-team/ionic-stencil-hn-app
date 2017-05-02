import { AbstractRule } from "./language/rule/abstractRule";
import { IOptions, IRule } from "./language/rule/rule";
export interface IEnableDisablePosition {
    isEnabled: boolean;
    position: number;
}
export declare function loadRules(ruleOptionsList: IOptions[], enableDisableRuleMap: Map<string, IEnableDisablePosition[]>, rulesDirectories?: string | string[], isJs?: boolean): IRule[];
export declare function findRule(name: string, rulesDirectories?: string | string[]): typeof AbstractRule | null;
