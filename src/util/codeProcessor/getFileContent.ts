import * as fs from "fs";

export function getFileContent(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}
