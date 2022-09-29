import ProjectCard from '~/components/ProjectCard';
import { RoughNotation } from 'react-rough-notation';
import { getProjects } from '~/helpers/content'
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/server-runtime';
import RoutePage from '~/components/RoutePage';

export const loader = async () => {
  return json(getProjects(), {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=600',
    },
  });
}

export function meta() {
  return {
    title: 'Projects | AcidOP',
    description: 'List of projects I have worked on or built',
    keywords: 'Javascript, Python, NodeJS, React, programming, coding'
  }
}

const ProjectIndex = () => {
  const data = useLoaderData();
  return (
    <div className='container mx-auto'>
      <section className='h-28 pb-32 md:pb-5 mb-8'>
        <h1 className='heading'>
          Projects
        </h1>
        <h2 className='flex flex-col sm:flex-row'>
          Here are some projects I have built with my {'\u00A0'}
          <RoughNotation type="underline" show={true} color="red">
            <h2>blood sweat and tears</h2>
          </RoughNotation>
        </h2>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5'>
        {
          data.map((project, index) => {
            return (
              <ProjectCard key={index} {...project} />
            )
          })
        }
      </div>
      <RoutePage link='/uses' title='See what I use' />
    </div>
  )
}

export default ProjectIndex