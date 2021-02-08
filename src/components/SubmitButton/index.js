import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const SubmitButton = ({ children, ...options }) => {
  return (
    <Button {...options}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object
}
