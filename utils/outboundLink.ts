import fs, { readFileSync } from "fs";
import path from "path";
import { BLOG, BLOG_IGNORE_DIR } from "./constants";
import { getFolderMap, getCateFromTitleMap } from "./route";
import Url from 'url'

interface MdFileOption {
  blackList?: string[];
  suffix?: string[];
  dest?: string;
  filename?: string;
  fileTitle?: string;
}

const findAllMdFiles = (option: MdFileOption = {}) => {
  const {
    suffix = [".md"],
    dest = "article-set",
    filename = "URL-SET.md",
    fileTitle = "外链合集",
    blackList = BLOG_IGNORE_DIR,
  } = option;

  const destPath = path.resolve(BLOG, dest);
  if (!fs.statSync(destPath).isDirectory()) {
    throw new Error(`不是文件夹: ${destPath}`);
  }

  const destFile = path.join(destPath, filename);
  const ignoreDestFile = path.relative(BLOG, destFile);

  const reg = /(?<!!)\[[^\]]+\]\(http[^)]+\)/g;
  const titleMap = {};

  let dirs = fs.readdirSync(BLOG, { recursive: true, encoding: "utf-8" });
  dirs = dirs.filter((dir) => {
    if (dir === ignoreDestFile) return false;

    const dirParts = dir.split("/");
    const root = dirParts[0];
    const suff = dirParts.slice(-1)[0];

    if (blackList.includes(root)) return false;

    if (!titleMap[root]) {
      titleMap[root] = getFolderMap(root);
    }

    if (!suffix.some((s) => suff.endsWith(s))) return false;

    return true;
  });


  const categoryMap = {};
  let results: string[] = [];
  dirs.forEach((dir) => {
    const file = path.resolve(BLOG, dir);
    const con = readFileSync(file, "utf-8");
    const urls = Array.from(con.matchAll(reg));

    if (urls.length === 0) return;

    const [root, ...dirRest] = dir.split("/");
    const file2 = path.relative(`${BLOG}/${root}`, file);
    const category = dirRest.length
      ? getCateFromTitleMap(root, file2, titleMap[root])
      : null;

    urls.forEach((url, index) => {
      if (index === 0) {
        let title = con.split("\n", 1)[0];
        title = title || dir;

        if (!categoryMap[category]) {
          categoryMap[category] = [];
        }
        title = title.replace(/^\s*#*\s*/, "### ");
        categoryMap[category].push(title);
        categoryMap[category].push(`[跳到文章](${dir}) ${dir}\n`);
      }
      // const reg = /\]\(([^)]+)\)/
      // const a = reg.exec(url[0])?.[1]
      // const parsedUrl = Url.parse(a!)
      categoryMap[category].push(`${index + 1}. ${url[0]}`);
    });
  });

  results.push(`# ${fileTitle}`);
  Object.keys(categoryMap).forEach(cate => {
    results.push(`## ${cate}`)
    results = results.concat(categoryMap[cate])
  })

  fs.writeFileSync(destFile, results.join("\n"));
};

findAllMdFiles()