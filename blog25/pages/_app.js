import Head from 'next/head'
import { Fragment } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>BLOG25</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
