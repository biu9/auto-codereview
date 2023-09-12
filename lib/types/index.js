"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultType = exports.ModelType = exports.ModelProvider = void 0;
var ModelProvider;
(function (ModelProvider) {
    ModelProvider[ModelProvider["azureOpenAI"] = 0] = "azureOpenAI";
    ModelProvider[ModelProvider["openAI"] = 1] = "openAI";
})(ModelProvider = exports.ModelProvider || (exports.ModelProvider = {}));
var ModelType;
(function (ModelType) {
    ModelType["gpt316k"] = "gpt-3.5-turbo-16k";
})(ModelType = exports.ModelType || (exports.ModelType = {}));
var ResultType;
(function (ResultType) {
    ResultType[ResultType["localFile"] = 0] = "localFile";
})(ResultType = exports.ResultType || (exports.ResultType = {}));
