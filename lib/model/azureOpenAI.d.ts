import { ChatMessage } from "@azure/openai";
/**
 * @description azure openai模型
 * @returns 获取回复以及embedding的两个函数
 */
export declare function azureOpenAI(): {
    getReview: (codes: ChatMessage[]) => Promise<string>;
    getEmbedding: () => Promise<void>;
};
