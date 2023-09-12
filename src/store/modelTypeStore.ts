enum ModelProvider {
  azureOpenAI,
  openAI,
}

const initState = {
  modelProvider: ModelProvider.azureOpenAI,
};

/**
 * @description 全局存储model相关信息
 * @returns setModelType,getModelType函数
 */
export function modelStore() {
  function setModelProvider(modelProvider: ModelProvider) {
    initState.modelProvider = modelProvider;
  }

  function getModelProvider() {
    return initState.modelProvider;
  }

  return {
    setModelProvider,
    getModelProvider,
  };
}
