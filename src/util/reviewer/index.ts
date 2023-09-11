import { modelTypeStore } from "../../store";

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
export function reviewer(reviewerOptions: reviewerOptions) {
  const { modelType } = reviewerOptions;
  const modelTypeStoreInstance = modelTypeStore();
  if (modelType) {
    modelTypeStoreInstance.setModelType(modelType);
  }

  console.log(modelTypeStoreInstance.getModelType());
}
