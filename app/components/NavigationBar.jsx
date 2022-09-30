import PageUrlDisplay from "./PageUrlDisplay"
import navlinks from '~/config/headerLinks.js'
import { Link } from "@remix-run/react";
import Hamburger from "./Hamburger";

const NavigationBar = () => {
  return (
    <>
      <navbar className="sticky top-0 backdrop-blur-sm z-10">
        <div className="flex justify-between items-center h-24 mb-3 px-5 sm:px-10">

          <div>
            <PageUrlDisplay />
          </div>

          <div className="flex flex-row items-center space-x-5">
            <ul className="hidden lg:flex">
              {
                navlinks.map((link, index) => {
                  return link.hamburgerOnly ? null : (
                    <li key={index}>
                      <Link to={link.path} className="btn" prefetch="render" >
                        {link.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <Hamburger />
          </div>
        </div>
      </navbar>
    </>
  )
}

export default NavigationBar