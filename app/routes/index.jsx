import { Link } from "@remix-run/react"
import { RoughNotation } from "react-rough-notation"

import { FiBookOpen } from 'react-icons/fi'
import { BsArrowRight } from "react-icons/bs"
import { GiDualityMask } from 'react-icons/gi'
import { IoHammerSharp } from 'react-icons/io5'

export function meta() {
  return {
    title: 'Home | AcidOP',
    description: 'Welcome to My personal blog where I write articles about my journey as a developer and my personal life'
  }
}

const Index = () => {
  return (
    <main >
      <h1 className='text-4xl md:text-5xl mb-10 font-bold'>
        Hi, I am <span className="text-6xl font-extrabold text-yellow-500">Acid</span>
      </h1>
      <div className="flex justify-center">
        <section className="flex flex-col lg:flex-row items-center lg:items-start">
          <article className="max-w-2xl font-mono">
            <RoughNotation type="box" show={true} color="#FBBF24" strokeWidth={2} animationDelay={500} animationDuration={3000}>
              <p className="text-gray-300 px-6 lg:py-10">
                Welcome to My personal blog where I write articles about my journey as a developer and my personal life.
                I am a High School student, passionate about programming and I like to build projects.
              </p>
            </RoughNotation>
            <section className="hidden lg:block lg:mt-10 w-fit">
              <RoughNotation type="underline" show={true} color="#FBBF24" animationDelay={3000} animationDuration={1000}>
                <p className="text-md">Have a good read and enjoy your stay!</p>
              </RoughNotation>
            </section>
          </article>
          <section className="my-6 lg:mx-6 lg:my-0 space-y-5">
            <Link className="btn-primary" to="/about">
              <GiDualityMask className='text-yellow-500 animate-bounce' /><p className="hov">Demystify me</p> <BsArrowRight className='text-yellow-500' />
            </Link>
            <Link className="btn-primary" to="/projects">
              <IoHammerSharp className='text-yellow-500 animate-bounce' /><p className="hov"> See what I built </p><BsArrowRight className='text-yellow-500' />
            </Link>
            <Link className="btn-primary" to="/blogs">
              <FiBookOpen className='text-yellow-500 animate-bounce' /><p className="hov">Read what I write </p><BsArrowRight className='text-yellow-500' />
            </Link>
          </section>
        </section>
      </div>
    </main>
  )
}

export default Index