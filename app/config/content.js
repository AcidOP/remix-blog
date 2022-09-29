const fs = require('fs')
const matter = require('gray-matter')

const rootDir = './content'
const projectDir = `${rootDir}/projects`
const blogDir = `${rootDir}/blogs`

const allProjects = fs.readdirSync(projectDir).map((file) => {
  const raw = fs.readFileSync(`${projectDir}/${file}`, 'utf-8')
  const { data } = matter(raw)
  return data
})

const allBlogs = fs.readdirSync(blogDir).map((file) => {
  const raw = fs.readFileSync(`${blogDir}/${file}`, 'utf-8')
  const { data } = matter(raw)
  return data
})

const readProject = (slug) => {
  if (!fs.existsSync(`${blogDir}/${slug}.md`)) return null
  const { content, data } = matter.read(`${blogDir}/${slug}.md`)
  return { content, data }
}

const readBlog = (slug) => {
  if (!fs.existsSync(`${blogDir}/${slug}.md`)) return null
  const { content, data } = matter.read(`${blogDir}/${slug}.md`)
  return { content, data }
}

module.exports = {
  allProjects,
  allBlogs,
  readProject,
  readBlog,
}