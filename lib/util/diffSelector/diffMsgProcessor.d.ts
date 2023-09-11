interface IFile {
    name: string;
    content: string;
}
/**
 * @description 处理git diff命令的输出
 * @param rowDiffMessage git diff命令的输出
 * @returns {Array<IFile>} 变更的文件
 */
export declare function diffMsgProcessor(rowDiffMessage: string): Array<IFile>;
export {};
