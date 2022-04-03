import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Peggy Pug World Domination page</p>
        <p>
          <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>I still need an achor tag for links?</a>
          </Link>
        </h1>
        <h1 className="title">
          Learn about our glorious leader{' '}
          <Link href="/pug/peggy-pug">
            <a>Peggy Pug</a>
          </Link>
        </h1>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
