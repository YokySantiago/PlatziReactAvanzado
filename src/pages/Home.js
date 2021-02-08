import React, { lazy, Suspense } from 'react'

import { Layout } from './../components/Layout'
import { Spinner } from '../components/Spinner'

const ListOfCategories = lazy(() => import('../components/ListOfCategories'))
const ListOfPhotoCards = lazy(() => import('../containers/ListOfPhotoCards'))

const HomePage = ({ id }) => {
  const description = 'Acá podrás encontrar fotos de las mascotas domésticas que más te gustan, disfruta de Petgram!'
  return (
    <Layout title='Home' description={description}>
      <Suspense fallback={<Spinner />}>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Suspense>
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

export default Home
