import path from "path";
import fs from "fs";
import { parse, transformFromAstSync } from "@babel/core";
import { declare } from "@babel/helper-plugin-utils";
import { upperCaseStart } from "../utils/tool";

interface Option {
  BLOG_DIR: string;
  routerExports: string[];
}

// 将博客路由导出内容写到config文件
export const overrideConfig = (option: Option) => {
  const destFolder = process.argv[2];

  if (!destFolder) {
    throw new Error(`缺少参数 folder`);
  }

  const { routerExports, BLOG_DIR } = option;

  const cwd = process.cwd();
  const BLOG_ROOT = path.resolve(cwd, BLOG_DIR);
  const configFile = path.join(BLOG_ROOT, ".island/config.ts");

  const configContent = fs.readFileSync(configFile, "utf-8");

  const configAst = parse(configContent, {
    sourceType: "unambiguous",
  });
  const addBlogRoute = declare((api) => {
    api.assertVersion(7);

    const exportName = routerExports.reduce((result, item) => {
      const navType = upperCaseStart(item).replace(/route/i, "");
      const routeName = destFolder + navType;
      result[item] = routeName;
      return result;
    }, {});

    return {
      visitor: {
        Program: {
          enter(path, state) {
            const blogSource = `../${destFolder}/router`;

            path.traverse({
              ImportDeclaration(p) {
                const source = p.node.source.value;
                if (source === blogSource) {
                  state.hasImportBlog = true;
                }
              },
            });

            if (state.hasImportBlog) {
              console.info(`以忽略已导入的文件：${destFolder}`);
              return;
            }
            // blog route 导入语句
            const imported = Object.entries(exportName)
              .map((r) => r.join(" as "))
              .join(", ");
            const importAST = api.template.ast(
              `import { ${imported} } from '${blogSource}'`
            );
            path.node.body.unshift(importAST);
          },
        },
        ObjectProperty(path, state) {
          if (state.hasImportBlog) return;

          const { key, value } = path.node;
          if (key.name !== "themeConfig") return;

          value.properties.forEach((property) => {
            const { key, value } = property;
            if (key.name === "nav") {
              // 不要使用api.template，标识符后面会生成分号，这回导致报错
              // const navAst = api.template.ast(exportName['navRoute'], { placeholderPattern: false });
              const navAst = api.types.Identifier(exportName["navRoute"]);
              value.elements.push(navAst);
            }

            if (key.name === "sidebar") {
              // 构造扩展运算符
              const sidebarAst = api.types.spreadElement(
                api.types.identifier(exportName["sidebarRoute"])
              );
              value.properties.push(sidebarAst);
            }
          });
        },
      },
    };
  });

  const { code } = transformFromAstSync(configAst, configContent, {
    plugins: [addBlogRoute],
  });

  fs.writeFileSync(configFile, code);
};
