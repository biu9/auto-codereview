"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = exports.REVIEW_FILE_PATH = exports.REVIEW_FILE_EXTENSION = exports.IGNORE_FILE = exports.PROMPT = void 0;
var PROMPT = "请帮我review下面的代码,给出具体的修改理由,对于代码总体的评价,以及修改后的代码: \n\n";
exports.PROMPT = PROMPT;
var SERVER = "https://review-api.cc98-summary.top/";
exports.SERVER = SERVER;
// const SERVER = 'http://localhost:3000/';
var IGNORE_FILE = [
    "package-lock.json",
    "package.json",
    ".gitignore",
    "CHANGELOG.md",
    "README.md",
    "LICENSE",
    "REVIEW.md",
    "conf.ts",
    "tsconfig.json",
];
exports.IGNORE_FILE = IGNORE_FILE;
var REVIEW_FILE_EXTENSION = [
    ".js",
    ".ts",
    ".jsx",
    ".tsx",
    ".TS",
    ".JS",
    ".TSX",
    ".JSX",
];
exports.REVIEW_FILE_EXTENSION = REVIEW_FILE_EXTENSION;
var REVIEW_FILE_PATH = "./REVIEW.md";
exports.REVIEW_FILE_PATH = REVIEW_FILE_PATH;
