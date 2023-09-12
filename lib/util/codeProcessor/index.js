"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeProcessor = void 0;
var splitCode_1 = require("./splitCode");
var getFileContent_1 = require("./getFileContent");
/**
 * @description 处理超出token限制的变更代码
 * @param changedFiles 变更的文件名数组
 * @returns
 */
function codeProcessor(changedFiles) {
    var files = changedFiles.map(function (file) {
        var content = (0, getFileContent_1.getFileContent)(file);
        return {
            name: file,
            content: content,
        };
    });
    var splitedChatMessage = (0, splitCode_1.splitCode)(files);
    return splitedChatMessage;
}
exports.codeProcessor = codeProcessor;
