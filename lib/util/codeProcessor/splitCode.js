"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitCode = void 0;
/**
 * @description 处理超出token限制的代码
 * @param code
 * @param maxToken
 */
function splitCode(files, maxToken) {
    if (maxToken === void 0) { maxToken = 4000; }
    return files;
}
exports.splitCode = splitCode;
