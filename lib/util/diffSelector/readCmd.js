"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCmd = void 0;
var readline_1 = __importDefault(require("readline"));
var chalk_1 = __importDefault(require("chalk"));
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline_1.default.emitKeypressEvents(process.stdin);
/**
 * @description 读取命令行输入, 选择要review的变更
 * @returns {string} 选中的要review的变更的代码路径
 */
function readCmd(changedFiles) {
    return new Promise(function (resolve, reject) {
        var options = changedFiles.map(function (file) { return file.name; }).concat(["确认提交"]);
        var selectedIndex = [];
        var currIndex = 0;
        var renderOptions = function () {
            console.clear();
            console.log("请选择需要提交的代码：");
            options.forEach(function (option, index) {
                if (index === currIndex) {
                    console.log(chalk_1.default.red.bold("> ".concat(option)));
                }
                else {
                    if (selectedIndex.indexOf(index) !== -1) {
                        console.log(chalk_1.default.green("\u2714 ".concat(option)));
                    }
                    else {
                        console.log("  ".concat(option));
                    }
                }
            });
        };
        renderOptions();
        process.stdin.on("keypress", function (str, key) {
            if (key.name === "up") {
                currIndex = currIndex === 0 ? options.length - 1 : currIndex - 1;
                renderOptions();
            }
            else if (key.name === "down") {
                currIndex = currIndex === options.length - 1 ? 0 : currIndex + 1;
                renderOptions();
            }
            else if (key.name === "return") {
                if (currIndex === options.length - 1) {
                    console.log('您选择了:\n', selectedIndex.map(function (index) { return options[index]; }).join('\n') + '\n开始code review...');
                    resolve(selectedIndex.map(function (index) { return options[index]; }));
                    rl.close();
                }
                else {
                    if (selectedIndex.indexOf(currIndex) === -1) {
                        selectedIndex.push(currIndex);
                    }
                    else {
                        selectedIndex.splice(selectedIndex.indexOf(currIndex), 1);
                    }
                    renderOptions();
                }
            }
        });
    });
}
exports.readCmd = readCmd;
