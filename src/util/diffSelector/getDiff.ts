import { execSync } from "child_process";
import { diffMsgProcessor } from "./diffMsgProcessor";

interface IDiff {
  message: string;
  error: any;
}

const getDiff = () => {
  const res: IDiff = {
    message: "",
    error: "",
  };

  try {
    const output = execSync("git diff");
    res.message = output.toString();
  } catch (error) {
    res.error = error;
  }

  return diffMsgProcessor(res.message);;
};

export { getDiff };
