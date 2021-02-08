import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from './../FavButton'
import { ToggleLikeMutation } from './../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`} rel='canonical'>
            <ImgWrapper className='rounded shadow md:shadow-xl'>
              <Img src={src} alt='Card Icon' />
            </ImgWrapper>
          </Link>
          <div className='px-2 pb-1'>
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return (
                  <div className='flex flex-row items-center mt-1'>
                    <FavButton
                      onClick={handleFavClick}
                      likes={likes}
                      liked={liked}
                    />
                    <span className='text-sm sm:text-base'>{likes}</span>
                  </div>
                )
              }}
            </ToggleLikeMutation>
          </div>
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
