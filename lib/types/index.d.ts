export declare enum ModelProvider {
    azureOpenAI = 0,
    openAI = 1
}
export declare enum ModelType {
    gpt316k = "gpt-3.5-turbo-16k"
}
export interface reviewerOptions {
    modelProvider?: ModelProvider;
    modelType?: ModelType;
    maxToken?: number;
}
export declare enum ResultType {
    localFile = 0
}
export interface IDiff {
    message: string;
    error: any;
}
export interface IFile {
    name: string;
    content: string;
}
