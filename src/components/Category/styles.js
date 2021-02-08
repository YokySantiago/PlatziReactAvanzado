import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction:column;
  text-align: center;
  text-decoration: none;
`

export const Image = styled.img`
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  overflow: hidden;
  object-fit: cover;
`
