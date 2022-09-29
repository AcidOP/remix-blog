import {uses} from '~/config/uses.js'
import UsesCard from '~/components/UsesCard.jsx'
import { RoughNotation } from 'react-rough-notation'
import RoutePage from '~/components/RoutePage'

export function meta() {
  return {
    title: 'Uses | AcidOP',
    description: 'List of hardware and software I use almost daily to make life easier.',
  }
}

const Uses = () => {
  return (
    <section>
      <RoughNotation type="underline" show={true} color="#FBBF24" strokeWidth={3}>
        <heading>
          <h1 className='font-extrabold text-3xl sm:text-5xl py-2'>
            Uses
          </h1>
          <h2>Here is a list of things I use almost daily</h2>
        </heading>
      </RoughNotation>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {uses.map((use, index) => (
          <UsesCard key={index} title={use.name} description={use.description} link={use.link} />
        ))}

      </section>
      <RoutePage link='/journey' title='See my journey' className='m-2 sm:ml-5' />
    </section>
  )
}

export default Uses