interface IFile {
  name: string;
  content: string;
}

/**
 * @description 处理超出token限制的代码
 * @param code
 * @param maxToken
 */
export function splitCode(
  files: Array<IFile>,
  maxToken: number = 4000,
): Array<IFile> {
  return files;
}
