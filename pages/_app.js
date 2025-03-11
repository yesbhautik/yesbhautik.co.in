import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import CommandBar from '../components/CommandBar'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  // This helps with hydration issues in React 18
  useEffect(() => {
    // The check ensures this only runs once in development
    if (process.env.NODE_ENV !== 'production') {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        if (/Warning.*Content does not match server-rendered HTML/.test(args[0])) {
          return;
        }
        if (/Warning: Text content did not match/.test(args[0])) {
          return;
        }
        if (/Warning: Expected server HTML to contain/.test(args[0])) {
          return;
        }
        originalConsoleError(...args);
      };
    }
  }, []);

  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
  )
}
