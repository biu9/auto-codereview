"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeProcessor = void 0;
var splitCode_1 = require("./splitCode");
var getFileContent_1 = require("./getFileContent");
var conf_1 = require("../../conf");
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
    var chatMessages = [
        { role: "system", content: conf_1.PROMPT },
    ];
    var splitedFiles = (0, splitCode_1.splitCode)(files);
    splitedFiles.forEach(function (file) {
        var name = file.name, content = file.content;
        chatMessages.push({
            role: "user",
            content: "\u8BF7\u68C0\u67E5".concat(name, "\u6587\u4EF6\u7684\n\n").concat(content),
        });
    });
    return chatMessages;
}
exports.codeProcessor = codeProcessor;
