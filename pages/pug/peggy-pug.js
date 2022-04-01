import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'

const PeggyPug = () => {
  return (
    <Layout>
      <Head>
        <title>Pug STuff</title>
      </Head>
      <div>
        <h1>Peggy Pug is the best pug</h1>
        <h2>
          <Link href="/">
            <a>Back to "home"</a>
          </Link>
        </h2>
      </div>
    </Layout>
  )
}

export default PeggyPug
