import NavigationBar from './components/NavigationBar';
import ScrollTop from './components/ScrollTop';

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
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: tailwindStyles },
]

export function ErrorBoundary() {
  return(
    <div>
      <h1>A very horrific error has occurred</h1>
      <pre>Error message: Oh it is nothing to worry about happens all the times</pre>
      <div></div>
      <a href="/">Come home with me</a>
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
        <main className='container mx-auto px-5 sm:px-0 mb-10'>
          <NavigationBar />
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
