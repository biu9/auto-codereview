import { localFile } from "./localFile";
declare enum ResultType {
    localFile = 0
}
/**
 * @description 代码审查结果处理函数
 * @param resultType 选择处理函数,默认本地生成文件
 * @returns
 */
export declare function resultHandler(resultType?: ResultType): typeof localFile;
export {};
