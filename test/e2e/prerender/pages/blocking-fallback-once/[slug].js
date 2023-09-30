import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: '404-on-manual-revalidate' },
      },
    ],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (process.env.NEXT_PHASE !== 'phase-production-build') {
    if (params.slug === '404-on-manual-revalidate') {
      return {
        notFound: true,
      }
    }
  }

  return {
    props: {
      params,
      hello: 'world',
      post: params.slug,
      random: Math.random(),
      time: (await import('perf_hooks')).performance.now(),
    },
    revalidate: false,
  }
}

export default ({ post, time, params }) => {
  if (useRouter().isFallback) {
    return <p>hi fallback</p>
  }

  return (
    <>
      <p>Post: {post}</p>
      <span id="time">time: {time}</span>
      <div id="params">{JSON.stringify(params)}</div>
      <div id="query">{JSON.stringify(useRouter().query)}</div>
      <Link href="/" id="home">
        to home
      </Link>
    </>
  )
}
