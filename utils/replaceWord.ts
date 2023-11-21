/**
 * 全局字符替换
 */

import path from "path";
import { BLOG, BLOG_IGNORE_DIR } from "./constants";
import replace from "replace";

type WorkMap = Record<string, string | string[]>;

const ignorePaths = BLOG_IGNORE_DIR.map((item) =>
  path.resolve(BLOG, item)
).join(",");


// key: 目标值， value: 原字符串
const wordsMap: WorkMap = {
  "service worker": ["服务工作者", "服务 Worker"],
  UI线程: "用户界面线程",
  渲染器: "呈现器",
  "Shadow DOM ": ["阴影DOM"]
  // 让步: '屈服'
};

const replaceWord = (source: string, target: string) => {
  replace({
    regex: source,
    replacement: target,
    exclude: ignorePaths,
    paths: [BLOG],
    include: "*.md",
    recursive: true,
    silent: false,
    count: true,
  });
};

const main = () => {
  Object.entries(wordsMap).forEach(([target, source]) => {
    source = Array.isArray(source) ? source : [source];

    source.forEach((s) => {
      replaceWord(s, target);
    });
  });
};

main();
