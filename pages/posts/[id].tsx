import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

import { GetStaticProps, GetStaticPaths } from 'next'

// export default function Post({ postData }) {
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
   <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <br />
          Regular Date: {postData.date}
          <br />
          With Date component: <Date dateString={postData.date} />
          <br />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>

  )
}


// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * @path : array of known paths returned by getAllPostIds()
   * which include the params defined by pages/posts/[id].js
   */
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}