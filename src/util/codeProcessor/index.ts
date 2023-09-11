import { splitCode } from "./splitCode";
import { getFileContent } from "./getFileContent";
import { ChatMessage } from "@azure/openai"
import { PROMPT } from "../../conf";

interface IFile {
  name: string;
  content: string;
}

/**
 * @description 处理超出token限制的变更代码
 * @param changedFiles 变更的文件名数组
 * @returns 
 */
export function codeProcessor(changedFiles: Array<string>): Array<ChatMessage> {
  const files = changedFiles.map((file) => {
    const content = getFileContent(file);
    return {
      name: file,
      content: content,
    };
  });
  const chatMessages:Array<ChatMessage> = [
    {role: "system", content: PROMPT},
  ]

  const splitedFiles = splitCode(files);

  splitedFiles.forEach((file) => {
    const { name, content } = file;
    chatMessages.push({
      role: "user",
      content: `请检查${name}文件的\n\n${content}`,
    })
  });

  return chatMessages;
}
