import React from 'react'
import { Query } from 'react-apollo'

import { PhotoCard } from './../components/PhotoCard'
import { withPhoto } from './../hoc/withPhoto'

const renderProps = ({ loading, data, error }) => {
  if (loading) {
    return (
      <div className='flex flex-col'>
        <div className='bg-gray-300 w-full h-44 sm:h-72 md:h-96 rounded animate-pulse' />
        <div className='bg-gray-300 w-1/4 h-8 mt-2 mx-4 sm:w-1/5 md:w-1/6 rounded animate-pulse' />
      </div>
    )
  }

  if (error) {
    return <p className=''>Ocurrió un error inesperado...</p>
  }
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={withPhoto} variables={{ id }}>
    {renderProps}
  </Query>
)
