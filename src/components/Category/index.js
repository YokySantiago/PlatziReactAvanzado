import React from 'react'

import { Link, Image } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => {
  const [show, ref] = useNearScreen()

  return (
    <Link to={path} ref={ref} className='w-16 md:w-20'>
      {show && (
        <div className='flex flex-col items-center'>
          <Image src={cover} alt='Cover Icon' className='h-16 w-16 md:w-20 md:h-20 rounded-full border-2 border-pink-600' />
          <span className='text-sm pt-1'>{emoji}</span>
        </div>
      )}
    </Link>
  )
}
