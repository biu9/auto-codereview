import { splitCode } from "./splitCode";
import { getFileContent } from "./getFileContent";
import { ChatMessage } from "@azure/openai";

/**
 * @description 处理超出token限制的变更代码
 * @param changedFiles 变更的文件名数组
 * @returns
 */
export function codeProcessor(changedFiles: Array<string>): ChatMessage[][] {
  const files = changedFiles.map((file) => {
    const content = getFileContent(file);
    return {
      name: file,
      content: content,
    };
  });

  const splitedChatMessage = splitCode(files);

  return splitedChatMessage;
}
