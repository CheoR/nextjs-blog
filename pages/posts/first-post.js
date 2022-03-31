import Link from 'next/link'
import React from 'react'

export default function FirstPost() {
  return (
    <div>
      <h1>MOO Cow Pug</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}
