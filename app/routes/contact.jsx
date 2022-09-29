import RoutePage from '~/components/RoutePage'
import { links } from '~/config/contactLinks'

export function meta() {
  return {
    title: 'Contact | AcidOP',
    description: 'Contact me through email or social media'
  }
}

const contact = () => {
  return (
    <section>
      <h1 className="heading">Contact Me</h1>
      <ul className='flex flex-col'>
        {
          links.map((link, index) => {
            return (
              <li key={index} className='py-4 max-w-sm'>
                <a href={link.url} target='_blank' rel='noreferrer' className='text-2xl sm:text-4xl hover:text-yellow-500'>
                  {link.username}
                  <span className='text-gray-500'>@</span>
                  {link.site}
                </a>
              </li>
            )
          })
        }
      </ul>
      <RoutePage link='/' title='Go back home' className='mt-7 text-2xl' />
    </section>
  )
}

export default contact