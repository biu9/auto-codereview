import { ModelProvider, ModelType } from "../types";
/**
 * @description 全局存储model相关信息
 * @returns setModelType,getModelType函数
 */
export declare function modelStore(): {
    setModelProvider: (modelProvider: ModelProvider) => void;
    getModelProvider: () => ModelProvider;
    setModelType: (modelType: ModelType) => void;
    getModelType: () => ModelType;
    setMaxToken: (maxToken: number) => void;
    getMaxToken: () => number;
};
