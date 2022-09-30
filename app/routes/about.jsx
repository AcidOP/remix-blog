import { Link } from "@remix-run/react"
import RoutePage from '~/components/RoutePage'
import { RoughNotation } from 'react-rough-notation'
import myPic from '~/images/myself.svg'

export function meta() {
  return {
    title: 'About | AcidOP',
    description: 'I am a High School student right now and a self taught programmer. I have been programming for more than 3 years now. I have worked on many projects using Python and Javascript. Currently I am learning about web dev with React.js and Remix.js and some designing stuff too.'
  }
}

const about = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center lg:items-start'>
      <section className='flex flex-col h-2/3 lg:m-10 lg:mr-16 items-center lg:sticky top-40'>
        <h1 className='heading'>About</h1>
        <img src={myPic} alt="Acid" className='w-36 rounded-full' />
        <h2 className='font-bold text-xl pt-2'>Sk. Zeeshan Ali</h2>
        <h3 className="text-sm text-slate-500">Home Brewed Engineer</h3>
        <h3 className="text-sm text-slate-500">Web Developer</h3>
        <h3 className="text-sm text-slate-500">Pentester Wannabe</h3>
      </section>
      <article className='mt-10 lg:mt-20 space-y-14'>
        <RoughNotation type='bracket' brackets={["left", "right"]} show={true} color="#FBBF24" animationDelay={1000} animationDuration={1000}>
          <p className='text-lg'>
            I am a High School student right now and a self taught programmer. I have been programming for more than 3 years now. I have worked on many projects using Python and Javascript. Currently I am learning about web dev with React.js and Remix.js and some designing stuff too.
          </p>
        </RoughNotation>
        <p>
          <RoughNotation type="underline" show={true} color="#FBBF24" strokeWidth={2} animationDelay={2000} animationDuration={1000}>
            <Link to='/uses' className="text-yellow-500">Here {' '}</Link>
          </RoughNotation>
          you can see what I use on a daily basis.
        </p>
        <p>
          I am always very keen to learn new things. I am always open to new opportunities. If you have any project that you want me to work on, feel free to {' '}
          <RoughNotation type="underline" show={true} color="#FBBF24" strokeWidth={2} animationDelay={3000} animationDuration={1000}>
            <Link to='/contact' className="text-yellow-500">contact me.</Link>
          </RoughNotation>
        </p>
        <section className="space-y-8">

          <h1 className="text-3xl w-fit font-bold">About this site</h1>

          <p>This website is my home on the world wide web. This website is kind of a mixture of blog and portfolio, my place to share code, <RoughNotation type='circle' color="red" strokeWidth={2} show={true} animationDelay={5000} animationDuration={1000}>
          420 IQ
            </RoughNotation> thoughts and creativity.</p>

          <p>How I built this website:</p>
          <ul className="flex flex-col space-y-2 lg:space-y-0">
            <li className="">
              <a href="https://remix.run/" className="text-yellow-500">Remix: </a>
              <p>Remix.js is the framework that I used to build this site</p>
            </li>
            <li>
              <a href="https://musing.vercel.app/" className="text-yellow-500">Parth Desai: </a>
              <p>Parth's website inspired the UI of this site</p>
            </li>
            <li>
              <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" className="text-yellow-500">Timothy's Starter Template: </a>
              <p>Template starter where I bootstrapped the project and converted to remix</p>
            </li>

          </ul>
        </section>
        <RoutePage link='blogs' title='Read Blogs' />
      </article>
    </section>
  )
}

export default about