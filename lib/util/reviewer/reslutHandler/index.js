"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultHandler = void 0;
var localFile_1 = require("./localFile");
var types_1 = require("../../../types");
/**
 * @description 代码审查结果处理函数
 * @param resultType 选择处理函数,默认本地生成文件
 * @returns
 */
function resultHandler(resultType) {
    switch (resultType) {
        case types_1.ResultType.localFile:
            return localFile_1.localFile;
        default:
            return localFile_1.localFile;
    }
}
exports.resultHandler = resultHandler;
