"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffMsgProcessor = void 0;
var conf_1 = require("../../conf");
var regxForAuthor = /Author:.*</;
var regxForDate = /Date:.*\n/;
var regxForEmail = /<.*>/;
var regxForFilename = /^\+\+\+(.*)/;
var regxForFileContent = /^\+().*/;
/**
 * @description 处理git diff命令的输出
 * @param rowDiffMessage git diff命令的输出
 * @returns {Array<IFile>} 变更的文件
 */
function diffMsgProcessor(rowDiffMessage) {
    var DiffMessage = {
        author: "",
        date: "",
        email: "",
        message: "",
    };
    var file = [];
    var tmp = rowDiffMessage.split("\n");
    for (var i = 0; i < tmp.length;) {
        if (tmp[i].match(regxForFilename)) {
            var name = tmp[i].replace("+++ b/", "").trim();
            var content = "";
            i++;
            while (tmp[i] && !tmp[i].match(regxForFilename)) {
                if (tmp[i].match(regxForFileContent)) {
                    content += tmp[i].replace("+", "") + "\n";
                }
                i++;
            }
            if (conf_1.IGNORE_FILE.includes(name))
                continue;
            if (!conf_1.REVIEW_FILE_EXTENSION.includes(name.slice(name.lastIndexOf("."))))
                continue;
            file.push({
                name: name,
                content: content,
            });
        }
        else {
            i++;
        }
    }
    return file;
}
exports.diffMsgProcessor = diffMsgProcessor;
