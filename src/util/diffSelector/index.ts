import { readCmd } from "./readCmd";
import { getDiff } from "./getDiff";

/**
 * 获取变更的代码
 * @returns {string} 变更的代码
 */
export async function diffSelector(): Promise<string> {
  const diff = getDiff();
  console.log(diff);
  const targets = await readCmd();

  return targets;
}
