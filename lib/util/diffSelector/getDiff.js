"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiff = void 0;
var child_process_1 = require("child_process");
var diffMsgProcessor_1 = require("./diffMsgProcessor");
/**
 * @description 获取git diff命令的输出
 */
var getDiff = function () {
    var res = {
        message: "",
        error: "",
    };
    try {
        var output = (0, child_process_1.execSync)("git diff");
        res.message = output.toString();
    }
    catch (error) {
        res.error = error;
    }
    return (0, diffMsgProcessor_1.diffMsgProcessor)(res.message);
};
exports.getDiff = getDiff;
