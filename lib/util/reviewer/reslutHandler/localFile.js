"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localFile = void 0;
var fs_1 = __importDefault(require("fs"));
var conf_1 = require("../../../conf");
function localFile(content) {
    for (var i = 0; i < content.length; i++) {
        fs_1.default.appendFileSync(conf_1.REVIEW_FILE_PATH, content[i] + "\n");
    }
    console.log("\u4EE3\u7801\u5BA1\u67E5\u7ED3\u675F,\u8BF7\u5728\u672C\u5730".concat(conf_1.REVIEW_FILE_PATH, "\u6587\u4EF6\u4E2D\u67E5\u770B\u5BA1\u67E5\u7ED3\u679C"));
}
exports.localFile = localFile;
