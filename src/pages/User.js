import React, { useContext } from 'react'
import { Context } from './../Context'

import { Layout } from './../components/Layout'
import { SubmitButton } from './../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(Context)
  const description = 'Acá tendrás la información de tu usuario, ¿No tienes uno? Regístrate!'
  return (
    <Layout title='Usuario' description={description}>
      <SubmitButton onClick={removeAuth} type='submit'>Cerrar sesión</SubmitButton>
    </Layout>
  )
}

export default User
