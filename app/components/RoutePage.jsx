import { Link } from "@remix-run/react"
import { AiFillCaretRight } from "react-icons/ai"

const RoutePage = ({ link, title, className }) => {
  if(link.startsWith('/')) {
    link = link.slice(1)
  }
  return (
    <Link to={`/${link}`} className={`flex flex-row font-bold text-yellow-500 text-sm ${className}`} prefetch='render' >{title}
    <button
    >
      <AiFillCaretRight size={20} className='pt-[5px]' />
    </button>
    </Link>
  )
}

export default RoutePage