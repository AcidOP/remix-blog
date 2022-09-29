import { useEffect, useState } from 'react'
import { TbArrowBigTop } from 'react-icons/tb'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    // window.scrollTo({ top: 0 })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div
      className={`fixed right-16 bottom-8 hidden flex-col gap-3 ${show ? 'md:flex' : 'md:hidden'}`}
    >
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollTop}
        className="pushable bg-slate-300/25 p-3 rounded-full hover:text-yellow-400 hover:scale-110 duration-75"
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">
          <TbArrowBigTop className="h-5 w-5" />
        </span>
      </button>
    </div>
  )
}

export default ScrollTop