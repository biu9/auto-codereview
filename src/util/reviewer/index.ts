import { modelStore } from "../../store";
import { diffSelector } from "../diffSelector";
import { codeProcessor } from "../codeProcessor";
import { model } from "../../model";
import { resultHandler } from "./reslutHandler";

enum ModelProvider {
  azureOpenAI,
  openAI,
}

interface reviewerOptions {
  modelProvider?: ModelProvider;
}

/**
 * @description 根据reviewerOptions初始化后续采用的模型类型
 * @param reviewerOptions
 */
export async function reviewer(reviewerOptions: reviewerOptions) {
  const { modelProvider } = reviewerOptions;
  const modelTypeStoreInstance = modelStore();
  if (modelProvider) {
    modelTypeStoreInstance.setModelProvider(modelProvider);
  }

  const targets = await diffSelector();
  const splitedFiles = codeProcessor(targets);

  const currModel = model();

  const reuqests = splitedFiles.map((splitedFile) =>
    new Promise((resolve) => {
      currModel.getReview(splitedFile).then((res) => {
        resolve(res);
      });
    }),
  );
  const res = await Promise.all(reuqests) as string[];

  const resultHandlerFunc = resultHandler();
  resultHandlerFunc(res);
}
