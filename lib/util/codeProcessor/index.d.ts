import { ChatMessage } from "@azure/openai";
/**
 * @description 处理超出token限制的变更代码
 * @param changedFiles 变更的文件名数组
 * @returns
 */
export declare function codeProcessor(changedFiles: Array<string>): Array<ChatMessage>;
