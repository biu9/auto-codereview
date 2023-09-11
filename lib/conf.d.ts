declare const PROMPT = "\u8BF7\u5E2E\u6211review\u4E0B\u9762\u7684\u4EE3\u7801,\u7ED9\u51FA\u5177\u4F53\u7684\u4FEE\u6539\u7406\u7531,\u5BF9\u4E8E\u4EE3\u7801\u603B\u4F53\u7684\u8BC4\u4EF7,\u4EE5\u53CA\u4FEE\u6539\u540E\u7684\u4EE3\u7801: \n\n";
declare const SERVER = "https://review-api.cc98-summary.top/";
declare const IGNORE_FILE: string[];
declare const REVIEW_FILE_EXTENSION: string[];
declare const REVIEW_FILE_PATH = "./REVIEW.md";
export { PROMPT, IGNORE_FILE, REVIEW_FILE_EXTENSION, REVIEW_FILE_PATH, SERVER };
