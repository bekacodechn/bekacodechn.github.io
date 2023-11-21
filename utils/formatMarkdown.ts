import { uploadImage, allowExtname } from "./uploadImage";
import { BLOG } from "./constants";
import fs from "fs";
import path from "path";
import { execa } from "execa";

const regImg = /!\[[^\]]*\]\(([^\)]+)\)/g;
let md = process.argv[2];

if (!md || !md.endsWith(".md")) {
  throw new Error("输入文件错误，非md文件");
}

if (md.startsWith("blog/")) {
  md = md.replace("blog/", "");
}

md = path.resolve(BLOG, md);

if (!fs.existsSync(md)) {
  throw new Error(`文件不存在：${md}`);
}

const ignoredImgs: string[] = [];

const needUpload = (url: string, collectLegal = false) => {
  if (url.startsWith("https://blog-1318409910")) return false;
  const legal = allowExtname.some((ext) => url.endsWith(`.${ext}`));
  if (!legal && collectLegal) {
    ignoredImgs.push(url);
  }
  return legal;
};

const removeSubTitle = (content: string) => {
  const regSubTitle = /\*\*文章副标题:\*\*\s*(\w*)/;
  const subTitle = regSubTitle.exec(content)?.[1];
  if (!subTitle) {
    content = content.replace(regSubTitle, "");
  }
  return content;
};

const format = (content: string) => {
  const keepOriginCode = ((inCode = false) => {
    return (content: string) => {
      const regCodeStart = /```\w+/;
      if (!inCode && regCodeStart.test(content)) {
        inCode = true;
      } else if (content === "```") {
        inCode = false;
      }
      return inCode;
    };
  })();

  const keepOriginMetaData = ((inMetaData = false) => {
    return (content: string) => {
      if (!inMetaData && content === META_DATA) {
        inMetaData = true;
      } else if (inMetaData && content === "---") {
        inMetaData = false;
      }
      return inMetaData;
    };
  })();

  const keepOriginFormat = (content: string) => {
    return keepOriginMetaData(content) || keepOriginCode(content);
  };

  const META_DATA = "`metadata:`";
  const contents = content.split("\n");
  let result = "";
  let i = 0;
  const len = contents.length;

  const NEW_LINE = "\n";
  for (; i < len; i++) {
    const current = contents[i];
    const isNewLine = !current.trim();
    const next = contents[i + 1];
    const nextTrim = next?.trim();
    const isNextNewLine = !nextTrim;

    const keepOrigin = keepOriginFormat(current.trim());

    if (keepOrigin) {
      result += current + NEW_LINE;
      continue;
    }

    // 本行和下一行都不是换行
    if (!isNewLine && !isNextNewLine) {
      result += current + NEW_LINE;
    }

    // 本行不是换行，下一行是换行
    if (!isNewLine && isNextNewLine) {
      result += current;
    }

    if (isNewLine && !isNextNewLine) {
      result += current;
    }

    // 本行和下一行都是空行
    if (isNewLine && isNextNewLine) {
      let j = i + 2;
      while (typeof contents[j] === "string" && !contents[j].trim()) {
        j++;
      }
      i = j - 1;
      result += current + NEW_LINE;
    }

    result += NEW_LINE;
  }

  return result;
};

const replaceImages = async (content: string) => {
  let imgs = Array.from(content.matchAll(regImg)).map((item) => item[1]);
  imgs = imgs.filter((img) => needUpload(img, true));

  const blogImgs = await uploadImage(imgs);

  let idx = 0;
  content = content.replace(regImg, (m, $1) => {
    if (!needUpload($1)) return m;
    const img = blogImgs[idx++];
    if (!img) {
      throw new Error(`图片匹配错误，当前下标为: ${idx}`);
    }
    return m.replace($1, img);
  });

  return content;
};

const logIgnoredImage = () => {
  if (!ignoredImgs.length) return;

  console.log(`非法后缀共 ${ignoredImgs.length}个：\n`);
  console.log(`${ignoredImgs.map((img) => `  ${img}`).join("\n")}`);
};

const logInfos = () => {
  logIgnoredImage();
};

const execCommand = async () => {
  // 刷新路由
  await execa("pnpm", ["replace"])
  await execa('pnpm', ['sync'])
}

const main = async () => {
  let content = fs.readFileSync(md, "utf-8");

  content = removeSubTitle(content);

  content = format(content);

  content = await replaceImages(content);

  content = content.trimEnd() + "\n";
  fs.writeFileSync(md, content);

  logInfos();

  await execCommand()

};

main();
