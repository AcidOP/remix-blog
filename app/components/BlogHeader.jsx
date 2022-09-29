import { RoughNotation } from "react-rough-notation"
import { BsFillPencilFill, BsFillClockFill } from 'react-icons/bs'
import { timeToRead } from '~/helpers/readingTime'

const BlogHeader = ({ title, date, wordCount }) => {
  return (
    <RoughNotation type="underline" color="#FBBF24" show={true} className='w-4/5 flex flex-col justify-center items-center mb-7 pb-5 '>
      <p className=' text-gray-500 font-bold'>{date}</p>
      <h1 className='heading'>{title}</h1>
      <div className="flex space-x-5">
        <span className="flex items-center space-x-1">
          <BsFillPencilFill className='inline-block text-gray-500 text-sm' />
          <p className='text-gray-500'>{wordCount} words</p>
        </span>
        <span className="flex items-center space-x-1">
          <BsFillClockFill className='inline-block text-gray-500 text-sm' />
          <p className='text-gray-500'>{timeToRead(wordCount)} min read</p>
        </span>
      </div>
    </RoughNotation>
  )
}

export default BlogHeader