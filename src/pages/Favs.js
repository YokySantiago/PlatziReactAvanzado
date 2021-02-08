import React from 'react'

import { Layout } from './../components/Layout'
import { FavsWithQuery } from './../containers/GetFavorites'

const Favs = () => {
  const description = 'Acá podrás encontrar fotos de las mascotas domésticas que más te gustaron, disfruta de Petgram!'
  return (
    <>
      <Layout title='Favoritos' description={description}>
        <FavsWithQuery />
      </Layout>
    </>
  )
}

export default Favs
