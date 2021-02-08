import React, { useContext } from 'react'

import { Context } from './../Context'
import { Layout } from './../components/Layout'
import { RegisterMutation } from './../containers/RegisterMutation'
import { LoginMutation } from './../containers/LoginMutation'
import { UserForm } from './../components/UserForm'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const description = 'Acá tendrás la información de tu usuario, ¿No tienes uno? Regístrate!'

  return (
    <Layout title='Iniciar sesión' description={description}>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMessage =
                  error && 'El usuario ya existe o hay algún problema'
          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              errorMessage={errorMessage}
              title='Regístrate'
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMessage = error && 'Email o Contraseña incorrecto'
          return (
            <UserForm
              disabled={loading}
              onSubmit={onSubmit}
              errorMessage={errorMessage}
              title='Iniciar sesion'
            />
          )
        }}
      </LoginMutation>
    </Layout>
  )
}

export default NotRegisteredUser
