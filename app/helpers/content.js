const fs = require('fs');
const matter = require('gray-matter');

const contentRoot = process.cwd() + '/content';
const projectDir = `${contentRoot}/projects`;
const blogDir = `${contentRoot}/blogs`;

const sort = (data) => {
  return data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

const getProjects = () => {
  const projects = fs.readdirSync(projectDir).map((project) => {
    const projectPath = `${projectDir}/${project}`;
    const projectContent = fs.readFileSync(projectPath, 'utf8');
    const slug = project.replace('.md', '');
    const { data } = matter(projectContent);
    data.slug = slug;
    return data;
  });
  return sort(projects);
};

const getBlogs = () => {
  const blogs = fs.readdirSync(blogDir).map((blog) => {
    const blogPath = `${blogDir}/${blog}`;
    const blogContent = fs.readFileSync(blogPath, 'utf8');
    const slug = blog.replace('.md', '');
    const { data } = matter(blogContent);
    data.slug = slug;
    return data;
  });
  return sort(blogs);
}

const readProject = (slug) => {
  const projectPath = `${projectDir}/${slug}.md`;
  const projectContent = fs.readFileSync(projectPath, 'utf8');
  const { data, content } = matter(projectContent);
  return { data, content };
}

const readBlog = (slug) => {
  const blogPath = `${blogDir}/${slug}.md`;
  const blogContent = fs.readFileSync(blogPath, 'utf8');
  const { data, content } = matter(blogContent);
  return { data, content };
}


module.exports = {
  getProjects,
  getBlogs,
  readProject,
  readBlog
};