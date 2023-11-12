import path from "path";

export default function fixMdLink() {
  const root =
    process.argv.filter((argv) => !argv.startsWith("--")).slice(-1)[0] ||
    "blog";
  const prefix = path.join(process.cwd(), root)
  const rootDir = `/${root}/`

  return {
    name: "vite-plugin-fix-md-link",
    enforce: 'pre' as const,
    transform(code, id) {
      if (!id.endsWith(".md")) return code;

      // 匹配 [name](href)
      const reg = /\[[^\]]+\]\(([^\)]+)\)/g;

      const result = code.replace(reg, (match, link) => {
        if (link.startsWith(rootDir)) {
          return match.replace(rootDir, '')
        }
        if (!link.startsWith(".")) return match;

        let destFile = path.resolve(id, '..', link)
        destFile = destFile.replace(prefix, '').replace(/\.md$/, '')

        return  match.replace(link, destFile);
      });
      return result
    },
  };
}
