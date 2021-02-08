import React from 'react'

import { useInputValue } from './../../hooks/useInputValue'
import { SubmitButton } from './../SubmitButton'
import { Input, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, errorMessage = '', disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <div className='p-4 bg-white m-2 sm:w-10/12 md:w-6/12 sm:mx-auto'>
      <Title className='mb-4 text-center border-b border-pink-600 pb-2'>{title}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          placeholder='Email'
          disabled={disabled}
          {...email}
        />
        <Input
          type='password'
          placeholder='Password'
          disabled={disabled}
          {...password}
        />
        <SubmitButton type='submit' disabled={disabled}>
          {title}
        </SubmitButton>
      </form>
      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  )
}
