import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title>MOO PUG</title>
      </Head>
      <Script
        src=""
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>MOO Cow Pug</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}
