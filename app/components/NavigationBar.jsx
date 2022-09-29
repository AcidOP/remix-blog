import { useState } from "react"
import PageUrlDisplay from "./PageUrlDisplay"
import navlinks from '~/config/navlinks.js'
import { Link } from "@remix-run/react";

import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  
  return (
    <navbar className="sticky top-0 backdrop-blur-sm z-10">
      <div className="flex justify-between items-center h-24 mb-3">

        {!open && <div>
          <PageUrlDisplay />
        </div>}

        <div className="hidden lg:block">
          <ul className="flex">
            {
              navlinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path} className="btn" prefetch="render" >
                      {link.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="lg:hidden">
          {!open && <button onClick={toggle} className="text-2xl"><HiMenu /></button>}
        </div>

      </div>
      {open && <div className="absolute top-0 left-0 w-full h-screen bg-black/90" >
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-row justify-between py-7 w-full">
            <PageUrlDisplay />
            <button onClick={toggle} className="text-2xl"><MdClose size={40} /></button>
          </div>
          <ul className="flex flex-col items-center text-2xl space-y-3" onClick={toggle}>
            {
              navlinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path} className="btn" prefetch="render" >
                      {link.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>}
    </navbar>
  )
}

export default NavigationBar