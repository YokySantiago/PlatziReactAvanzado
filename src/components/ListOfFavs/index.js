import React from 'react'
import PropTypes from 'prop-types'

import { Link, Img, Grid } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Img src={fav.src} alt='Fav Icon' />
        </Link>
      ))}
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}
