"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
var azureOpenAI_1 = require("./azureOpenAI");
var store_1 = require("../store");
var ModelProvider;
(function (ModelProvider) {
    ModelProvider[ModelProvider["azureOpenAI"] = 0] = "azureOpenAI";
    ModelProvider[ModelProvider["openAI"] = 1] = "openAI";
})(ModelProvider || (ModelProvider = {}));
/**
 * @description 根据model type store中的model type返回对应的模型
 * @returns
 */
function model() {
    var modelTypeStoreInstance = (0, store_1.modelStore)();
    var modelProvider = modelTypeStoreInstance.getModelProvider();
    switch (modelProvider) {
        case ModelProvider.azureOpenAI:
            return (0, azureOpenAI_1.azureOpenAI)();
        default:
            return (0, azureOpenAI_1.azureOpenAI)();
    }
}
exports.model = model;
