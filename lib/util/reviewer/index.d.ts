declare enum ModelType {
    azureOpenAI = 0,
    openAI = 1
}
interface reviewerOptions {
    modelType?: ModelType;
}
/**
 * @description 根据reviewerOptions初始化后续采用的模型类型
 * @param reviewerOptions
 */
export declare function reviewer(reviewerOptions: reviewerOptions): Promise<void>;
export {};
