import { Link } from "@remix-run/react"

import { BsBookmarksFill } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'

const ProjectCard = ({ title, description, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} prefetch='render'>
      <article className="border border-gray-700 card-hover  p-5 rounded-lg">
        <main className="flex flex-col items-start">
          <div className="flex space-x-1">
            <BsBookmarksFill size={40} className="text-yellow-500" />
            <h2 className="text-xl font-bold hover:text-yellow-500">{title}</h2>
          </div>
          <p className="text-gray-400">{description}</p>
          <button className="hover:text-yellow-500 mt-4 flex items-center">
            Read More <AiFillCaretRight className="pt-[5px]" />
          </button>
        </main>
      </article>
    </Link>
  )
}

export default ProjectCard