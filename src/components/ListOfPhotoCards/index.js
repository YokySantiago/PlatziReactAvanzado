import React from 'react'

import { Spinner } from '../Spinner'
import { PhotoCard } from './../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  if (loading) return <Spinner />

  return (
    <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}
