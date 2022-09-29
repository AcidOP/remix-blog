import { journey } from '~/config/journey'
import JourneyCard from '~/components/JourneyCard'
import { RoughNotation } from 'react-rough-notation'
import RoutePage from '~/components/RoutePage'

export function meta() {
  return {
    title: 'Journey | AcidOP',
    description: 'Timeline of my achievements and important events in life'
  }
}

const Journey = () => {
  return (
    <article className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start'>
      <div className="lg:sticky top-40">
        <h1 className='heading'>My Journey</h1>
        <h2>
          Taking baby steps everyday towards <RoughNotation type="box" show={true} color="red">world domination</RoughNotation>
        </h2>
        <div className='hidden lg:block'>
          <RoutePage link='/contact' title="Let's talk" className='mt-7' />
        </div>
      </div>
      <section>
        {
          journey.map((journey, index) => {
            return (
              <JourneyCard
                key={index}
                date={journey.date}
                title={journey.title}
                description={journey.description}
              />
            )
          })
        }
      </section>
      <div className='lg:hidden'>
          <RoutePage link='/contact' title="Let's talk" className='mt-7' />
        </div>
    </article>
  )
}

export default Journey