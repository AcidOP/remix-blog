import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/';

const RenderMarkdown = ({ content, }) => {
  return (
    <ReactMarkdown
      children={content}
      className='prose prose-invert w-screen md:w-3/4 lg:w-2/3 px-5'
      components={
        {
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <pre className='bg-zinc-800 inline p-1'>
                <code className={`${{ className }}`} {...props}>
                  {String(children).replace(/\n$/, '')}
                </code>
              </pre>
            )
          }
            
        }
      }
    />
  )
}

export default RenderMarkdown