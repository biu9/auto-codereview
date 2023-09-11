interface IFile {
    name: string;
    content: string;
}
/**
 * @description 获取git diff命令的输出
 */
declare const getDiff: () => Array<IFile>;
export { getDiff };
