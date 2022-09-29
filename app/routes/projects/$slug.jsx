import { readProject } from '~/helpers/content'
import { json } from '@remix-run/server-runtime';
import { useLoaderData } from "@remix-run/react";
import RenderMarkdown from '~/components/RenderMarkdown'
import { transformDate } from '~/helpers/transformDate'
import { getCount } from '~/helpers/wordCount'
import BlogHeader from '~/components/BlogHeader';
import RoutePage from '~/components/RoutePage';

export const loader = async ({ params: { slug } }) => {
  const { data, content } = readProject(slug);
  if (!data) {
    return json({ data: null }, { status: 404 });
  }
  const formattedDate = transformDate(data.date, 'ddd, MMM DD, YYYY');
  const wordCount = getCount(content);
  return json({ data, content, date: formattedDate, wordCount });
}

export const meta = ({ data }) => {
  const { title, description } = data.data;
  return {
    title,
    description,
  };
}

const ProjectIndex = () => {
  let { data, content, date, wordCount } = useLoaderData();
  return (
    <main className='flex flex-col items-center'>
      <BlogHeader title={data.title} date={date} wordCount={wordCount} />
      <RenderMarkdown content={content} />
      <RoutePage link='projects' title='Go Back' className='md:mt-10' />
    </main>
  )
}

export default ProjectIndex