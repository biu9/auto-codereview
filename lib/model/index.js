"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
var azureOpenAI_1 = require("./azureOpenAI");
var store_1 = require("../store");
var ModelType;
(function (ModelType) {
    ModelType[ModelType["azureOpenAI"] = 0] = "azureOpenAI";
    ModelType[ModelType["openAI"] = 1] = "openAI";
})(ModelType || (ModelType = {}));
/**
 * @description 根据model type store中的model type返回对应的模型
 * @returns
 */
function model() {
    var modelTypeStoreInstance = (0, store_1.modelTypeStore)();
    var modelType = modelTypeStoreInstance.getModelType();
    switch (modelType) {
        case ModelType.azureOpenAI:
            return (0, azureOpenAI_1.azureOpenAI)();
        default:
            return (0, azureOpenAI_1.azureOpenAI)();
    }
}
exports.model = model;
