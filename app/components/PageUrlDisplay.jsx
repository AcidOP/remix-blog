import { useState, useEffect } from "react"
import { useLocation, Link } from "@remix-run/react"

const PageUrlDisplay = () => {
  const [url, setUrl] = useState("")
  const location = useLocation()

  useEffect(() => {
    setUrl(location.pathname)
  }, [location.pathname])

  return (
    <Link to='/' className="text-xl md:text-3xl font-semibold text-yellow-500">~{url}<span className="animate-ping">|</span></Link>
  )
}

export default PageUrlDisplay