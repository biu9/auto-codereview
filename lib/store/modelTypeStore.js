"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelTypeStore = void 0;
var ModelType;
(function (ModelType) {
    ModelType[ModelType["azureOpenAI"] = 0] = "azureOpenAI";
    ModelType[ModelType["openAI"] = 1] = "openAI";
})(ModelType || (ModelType = {}));
var initState = {
    modelType: ModelType.azureOpenAI,
};
/**
 * @description 全局存储modelType
 * @returns setModelType,getModelType函数
 */
function modelTypeStore() {
    function setModelType(modelType) {
        initState.modelType = modelType;
    }
    function getModelType() {
        return initState.modelType;
    }
    return {
        setModelType: setModelType,
        getModelType: getModelType,
    };
}
exports.modelTypeStore = modelTypeStore;
