import fs from 'fs'
import path from 'path'
import { BLOG, BLOG_IGNORE_DIR } from './constants';

const title_template = `
"",
\`metadata:\`,
"",
"**原标题:** $2",
"",
"**链接:** $1",
"",
"**文章副标题:** $3"
"",
"---",
"",
"$4"
`

const formatTitle = () => {
  let dirs = fs.readdirSync(BLOG)
  dirs.filter(dir => { })
}