import { modelTypeStore } from "../../store";
import { diffSelector } from "../diffSelector";
import { codeProcessor } from "../codeProcessor";
import { model } from "../../model";
import { resultHandler } from "./reslutHandler";

enum ModelType {
  azureOpenAI,
  openAI,
}

interface reviewerOptions {
  modelType?: ModelType;
}

/**
 * @description 根据reviewerOptions初始化后续采用的模型类型
 * @param reviewerOptions
 */
export async function reviewer(reviewerOptions: reviewerOptions) {
  const { modelType } = reviewerOptions;
  const modelTypeStoreInstance = modelTypeStore();
  if (modelType) {
    modelTypeStoreInstance.setModelType(modelType);
  }

  const targets = await diffSelector();
  const splitedFiles = codeProcessor(targets);

  const currModel = model();

  const res = await currModel.getReview(splitedFiles);
  const resultHandlerFunc = resultHandler();
  resultHandlerFunc(res);
}
