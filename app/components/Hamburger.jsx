import { useState } from "react"
import navlinks from '~/config/headerLinks.js'
import { Link } from "@remix-run/react";
import { HiMenu } from 'react-icons/hi'

const Hamburger = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)


  return (
    <div className="flex flex-col">
      <span onClick={toggle} className="bg-slate-300/25 p-2 rounded-full hover:cursor-pointer">
        <HiMenu />
      </span>
      <div>
        {
          open && <div className="absolute w-44 top-20 right-5 sm:right-10 bg-zinc-800 rounded-lg py-3 border border-zinc-900 border-spacing-10" >
            <div className="flex flex-col items-center h-full">
              <ul className="grid grid-cols-1" onClick={toggle}>
                {
                  navlinks.map((link, index) => {
                    return (
                      <Link key={index} to={link.path} prefetch="render" >
                        <li className='hover:bg-zinc-600 w-44 py-3 pl-3'>
                          <a href={link.path}>{link.name}</a>
                        </li>
                      </Link>
                    )
                  })
                }
              </ul>
            </div>

          </div>
        }
      </div>
    </div>
  )
}

export default Hamburger