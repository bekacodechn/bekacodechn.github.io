/**
 * 重写config.ts，起到刷新路由的作用。
 */
import fs from 'fs'
import path from 'path'
import { BLOG } from "./constants";

const config = path.resolve(BLOG, '.island/config.ts')

const content = fs.readFileSync(config, 'utf-8')
fs.writeFileSync(config, content)