import { splitCode } from "./splitCode";
import { getFileContent } from "./getFileContent";

interface IFile {
  name: string;
  content: string;
}

export function codeProcessor(changedFiles: Array<string>): Array<IFile> {
  const files = changedFiles.map((file) => {
    const content = getFileContent(file);
    return {
      name: file,
      content: content,
    };
  });

  const splitedFiles = splitCode(files);

  return splitedFiles;
}
