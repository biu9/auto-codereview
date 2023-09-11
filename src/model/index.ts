import { azureOpenAI } from "./azureOpenAI";
import { modelTypeStore } from "../store";

enum ModelType {
  azureOpenAI,
  openAI,
}

/**
 * @description 根据model type store中的model type返回对应的模型
 * @returns
 */
export function model() {
  const modelTypeStoreInstance = modelTypeStore();
  const modelType = modelTypeStoreInstance.getModelType();

  switch (modelType) {
    case ModelType.azureOpenAI:
      return azureOpenAI();
    default:
      return azureOpenAI();
  }
}
