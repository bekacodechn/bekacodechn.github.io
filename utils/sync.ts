import fs from 'fs'
import path from 'path'
import { BLOG } from "./constants";

const config = path.resolve(BLOG, '.island/config.ts')

const content = fs.readFileSync(config, 'utf-8')
fs.writeFileSync(config, content)