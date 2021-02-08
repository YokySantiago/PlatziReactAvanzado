import React from 'react'

import { Layout } from './../components/Layout'
import { PhotoCardWithQuery } from './../containers/PhotoCardWithQuery'

const Detail = ({ id }) => {
  const title = `Foto ${id}`
  const description = 'Acá encontrarás más detalle de esa máscota que te llamó la atención, ¿por qué no disfrutar de está red de mascotas?'
  return (
    <Layout title={title} description={description}>
      <div className='sm:w-11/12 md:w-8/12 sm:mx-auto'>
        <PhotoCardWithQuery id={id} />
      </div>
    </Layout>
  )
}

export default Detail
