import { modelStore } from "../../store";
import { diffSelector } from "../diffSelector";
import { codeProcessor } from "../codeProcessor";
import { model } from "../../model";
import { resultHandler } from "./reslutHandler";

enum ModelProvider {
  azureOpenAI,
  openAI,
}

enum ModelType {
  gpt316k="gpt-3.5-turbo-16k"
}

interface reviewerOptions {
  modelProvider?: ModelProvider;
  modelType?: ModelType;
  maxToken?: number;
}

/**
 * @description 根据reviewerOptions初始化后续采用的模型类型
 * @param reviewerOptions
 */
export async function reviewer(reviewerOptions: reviewerOptions) {
  const { modelProvider,modelType,maxToken } = reviewerOptions;
  const modelStoreInstance = modelStore();
  
  if (modelProvider) {
    modelStoreInstance.setModelProvider(modelProvider);
  }

  if(modelType) {
    modelStoreInstance.setModelType(modelType);
  }

  if(maxToken) {
    modelStoreInstance.setMaxToken(maxToken);
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
