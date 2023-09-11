interface IFile {
    name: string;
    content: string;
}
/**
 * @description 读取命令行输入, 选择要review的变更
 * @returns {string} 选中的要review的变更的代码路径
 */
export declare function readCmd(changedFiles: Array<IFile>): Promise<Array<string>>;
export {};
