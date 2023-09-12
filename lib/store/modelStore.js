"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelStore = void 0;
var types_1 = require("../types");
var initState = {
    modelProvider: types_1.ModelProvider.azureOpenAI,
    modelType: types_1.ModelType.gpt316k,
    maxToken: 16000,
};
/**
 * @description 全局存储model相关信息
 * @returns setModelType,getModelType函数
 */
function modelStore() {
    function setModelProvider(modelProvider) {
        initState.modelProvider = modelProvider;
    }
    function getModelProvider() {
        return initState.modelProvider;
    }
    function setModelType(modelType) {
        initState.modelType = modelType;
    }
    function getModelType() {
        return initState.modelType;
    }
    function setMaxToken(maxToken) {
        initState.maxToken = maxToken;
    }
    function getMaxToken() {
        return initState.maxToken;
    }
    return {
        setModelProvider: setModelProvider,
        getModelProvider: getModelProvider,
        setModelType: setModelType,
        getModelType: getModelType,
        setMaxToken: setMaxToken,
        getMaxToken: getMaxToken,
    };
}
exports.modelStore = modelStore;
