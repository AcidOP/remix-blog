import { Link } from "@remix-run/react"

import { VscGithub } from 'react-icons/vsc'
import { AiFillProject, AiFillCaretRight } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

const ProjectCard = ({ title, description, slug, github, external, technologies }) => {

  const descriptionLength = description.split(' ').length
  const display = ( descriptionLength > 30 ) ? description.split(' ').slice(0, 30).join(' ') + '...' : description;

  return (
    <article className="border border-gray-700 card-hover  p-5 rounded-lg">
      <heading className="flex flex-row items-center justify-between ">
        <AiFillProject size={40} className="text-yellow-500" />
        <div className="flex items-center space-x-3">
          {external && <a href={external} target="_blank" rel="noreferrer">
            <BiLinkExternal size={35} className="hover:text-yellow-500" />
          </a>}
          <a href={github} target="_blank" rel="noreferrer">
            <VscGithub size={35} className="hover:text-yellow-500" />
          </a>
        </div>
      </heading>
      <Link to={`/projects/${slug}`} prefetch='render'>
        <main className="flex flex-col items-start">
          <h2 className="text-xl font-bold hover:text-yellow-500">{title}</h2>
          <p className="text-gray-400">{display}</p>
          <button className="hover:text-yellow-500 mt-4 flex items-center">
            Read More <AiFillCaretRight className="pt-[5px]" />
          </button>
        </main>
      </Link>
      <footer className="flex flex-row items-center justify-between mt-4">
        <div className="flex flex-row items-center space-x-2">
          {technologies.map((tech, index) => {
            return (
              <span key={index} className="text-gray-400 text-sm">{tech}</span>
            )
          })}
        </div>
      </footer>
    </article>
  )
}

export default ProjectCard