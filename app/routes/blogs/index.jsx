import { getBlogs } from '~/helpers/content'
import RoutePage from '~/components/RoutePage';
import { json } from '@remix-run/server-runtime';
import { useLoaderData } from "@remix-run/react";

import BlogCard from '~/components/BlogCard';
import { RoughNotation } from 'react-rough-notation';

export const loader = async () => {
  return json(getBlogs(), {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=600',
    },
  });
}

export function meta() {
  return {
    title: 'Blogs | AcidOP',
    description: 'Here you can see some articles I have written',
  }
}

const ProjectIndex = () => {
  const data = useLoaderData();
  return (
    <div>
      <RoughNotation type="bracket" brackets={["left", 'right','bottom', 'top']} show={true} color="#FBBF24" strokeWidth={3}>
      <section className='h-28 mb-7 p-2'>
        <h1 className='heading'>
          My Articles
        </h1>
        <h2 className='pb-2'>
          List of articles written with {' '}
          <RoughNotation type="highlight" show={true} color="red" strokeWidth={3}>love</RoughNotation>
        </h2>
      </section>
      </RoughNotation>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5'>
        {
          data.map((blog, index) => {
            return (
              <BlogCard key={index} {...blog} />
            )
          })
        }
      </div>
      <RoutePage link='projects' title='My Projects' className='md:mt-10' />
    </div>
  )
}

export default ProjectIndex