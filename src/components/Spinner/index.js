import React from 'react'
import { FiLoader } from 'react-icons/fi'

export const Spinner = ({ text }) => {
  return (
    <div className='flex flex-col items-center'>
      <FiLoader className='animate-spin' size='32' />
      {text && <p>{text}</p>}
    </div>
  )
}
