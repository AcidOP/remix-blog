import NavigationBar from './components/NavigationBar';
import ScrollTop from './components/ScrollTop';
import config from '~/config/siteConfig.json'

import globalStyles from '~/styles/global.css';
import tailwindStyles from '~/styles/app-build.css';

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  robots: "follow, index",
  type: "website",
  author: config.author.name,
  title: config.title,
  description: config.description,
  site_name: config.url,
  "og:description": config.description,
  "og:title": config.title,
  "og:image": config.image
})

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: tailwindStyles },
]

export function ErrorBoundary() {
  return (
    <div>
      <h1>A very horrific error has occurred</h1>
      <pre>Error message: Oh it is nothing to worry about happens all the times</pre>
      <div></div>
      <a href="/">Come home with me 🤚🏻</a>
    </div>
  )
}

export default function App() {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavigationBar />
        <main className='container mx-auto px-5 md:px-12 mb-10'>
          <Outlet />
          <ScrollTop />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
