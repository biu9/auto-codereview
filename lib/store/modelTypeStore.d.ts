declare enum ModelType {
    azureOpenAI = 0,
    openAI = 1
}
/**
 * @description 全局存储modelType
 * @returns setModelType,getModelType函数
 */
export declare function modelTypeStore(): {
    setModelType: (modelType: ModelType) => void;
    getModelType: () => ModelType;
};
export {};
