enum ModelType {
  azureOpenAI,
  openAI,
}

const initState = {
  modelType: ModelType.azureOpenAI,
};

/**
 * @description 全局存储modelType
 * @returns setModelType,getModelType函数
 */
export function modelTypeStore() {
  function setModelType(modelType: ModelType) {
    initState.modelType = modelType;
  }

  function getModelType() {
    return initState.modelType;
  }

  return {
    setModelType,
    getModelType,
  };
}
