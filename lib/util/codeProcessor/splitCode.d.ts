import { ChatMessage } from "@azure/openai";
import { IFile } from "../../types";
/**
 * @description 处理超出token限制的代码
 * @param code
 * @param maxToken
 */
export declare function splitCode(files: Array<IFile>, maxToken?: number): ChatMessage[][];
