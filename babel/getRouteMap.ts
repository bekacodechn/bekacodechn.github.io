import { parse } from "@babel/core";
import generate from "@babel/generator";
import fs from "fs";

export const getRouteMap = (file: string) => {
  const content = fs.readFileSync(file, "utf-8");
  const ast = parse(content);

  const body = ast.program.body[0];
  if (!body || body.type !== "ExportDefaultDeclaration") return;

  let { code } = generate.default(body.declaration);

  code = `return ${code}`;
  code = new Function(code)();
  return code;
};
