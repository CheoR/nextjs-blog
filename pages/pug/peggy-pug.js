import Link from 'next/link'
import React from 'react'

const PeggyPug = () => {
  return (
    <div>
      <h1>Peggy Pug is the best pug</h1>
       <h2>
        <Link href="/">
          <a>Back to "home"</a>
        </Link>
      </h2>
    </div>
  )
}

export default PeggyPug