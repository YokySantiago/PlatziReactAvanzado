import styled from 'styled-components'
import { fadeIn } from './../../assets/styles/animation'

export const Article = styled.article`
  min-height: 30vh;
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${fadeIn({ time: '.15s' })}
`
