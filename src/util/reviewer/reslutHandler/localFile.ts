import fs from "fs";
import { REVIEW_FILE_PATH } from "../../../conf";

export function localFile(content:string) {
    fs.writeFileSync(REVIEW_FILE_PATH, content);
    console.log(`代码审查结束,请在本地${REVIEW_FILE_PATH}文件中查看审查结果`)
}