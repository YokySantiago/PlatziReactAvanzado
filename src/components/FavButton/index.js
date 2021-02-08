import React from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? FaHeart : FaRegHeart

  return (
    <Button onClick={onClick}>
      <Icon className='text-lg sm:text-xl' />
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
