"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitCode = void 0;
var tiktoken_1 = require("tiktoken");
var conf_1 = require("../../conf");
var store_1 = require("../../store");
var modelStoreInstance = (0, store_1.modelStore)();
/**
 * @description 处理超出token限制的代码
 * @param code
 * @param maxToken
 */
function splitCode(files, maxToken) {
    if (maxToken === void 0) { maxToken = modelStoreInstance.getMaxToken(); }
    var modelType = modelStoreInstance.getModelType();
    var enc = (0, tiktoken_1.encoding_for_model)(modelType);
    var splitedChatMessage = [];
    var promptLength = enc.encode(conf_1.PROMPT).length;
    maxToken -= promptLength;
    for (var i = 0; i < files.length; i++) {
        var j = i;
        var tmpChatMessages = [];
        var tmpSum = 0;
        while (j < files.length) {
            var _a = files[j], name = _a.name, content = _a.content;
            var tmpToken = enc.encode("\u8BF7\u68C0\u67E5".concat(name, "\u6587\u4EF6\u7684\n\n").concat(content)).length;
            if (tmpSum + tmpToken > maxToken) {
                console.log("".concat(name, "\u6587\u4EF6\u8D85\u51FAtoken\u9650\u5236,\u8FDB\u884C\u622A\u65AD\u5904\u7406..."));
                break;
            }
            else {
                tmpSum += tmpToken;
                tmpChatMessages.push({
                    role: "user",
                    content: "\u8BF7\u68C0\u67E5".concat(name, "\u6587\u4EF6\u7684\n\n").concat(content),
                });
                j++;
            }
        }
        tmpChatMessages.unshift({ role: "system", content: conf_1.PROMPT });
        splitedChatMessage.push(tmpChatMessages);
        i = j;
    }
    return splitedChatMessage;
}
exports.splitCode = splitCode;
