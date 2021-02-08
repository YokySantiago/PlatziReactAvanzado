import React from 'react'
import { Helmet } from 'react-helmet'

import { Logo } from './../Logo'

export const Layout = ({ children, title, description }) => {
  return (
    <div className='pb-14'>
      <Helmet>
        {title && <title>{title} | Petgram</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <div className='flex flex-row items-center justify-between'>
        <Logo />
        {title && <h1 className='text-gray-500 px-4 text-base sm:text-lg'>{title}</h1>}
      </div>
      <div className='container mx-auto'>
        {children}
      </div>
    </div>
  )
}
