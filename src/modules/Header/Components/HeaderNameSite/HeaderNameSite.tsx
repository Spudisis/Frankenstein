import React from 'react'
import { Head } from './HeaderNameSite.styles'
import { Link } from 'react-router-dom'
import { main } from 'src/routes/urlsPages'

export const HeaderNameSite = () => {
  return (
    <Head>
      <Link to={main}>Frankenstein</Link>
    </Head>
  )
}
