import React from 'react'

const JourneyCard = ({date, title, description}) => {
  return (
    <article className='bg-slate-500/25 my-5 p-5 rounded-lg max-w-md'>
      <h1 className='text-xl font-bold'>{title}</h1>
      <h2 className='text-slate-500'>{date}</h2>
      <p className='text-gray-300'>{description}</p>
    </article>
  )
}

export default JourneyCard