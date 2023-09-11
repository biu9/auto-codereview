/**
 * @description 根据model type store中的model type返回对应的模型
 * @returns
 */
export declare function model(): {
    getReview: (codes: import("@azure/openai").ChatMessage[]) => Promise<string>;
    getEmbedding: () => Promise<void>;
};
