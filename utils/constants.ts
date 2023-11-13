import path from 'path'

const cwd = process.cwd()

export const BLOG = path.resolve(cwd, 'blog')

export const BABEL = path.resolve(cwd, 'babel')

export const BLOG_IGNORE_DIR = ['.island']
