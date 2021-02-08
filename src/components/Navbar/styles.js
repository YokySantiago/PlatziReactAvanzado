import styled from 'styled-components'
import { fadeIn } from './../../assets/styles/animation'
import { Link as LinkRouter } from '@reach/router'

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000000;

    &:after {
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 24px;
      line-height: 30px;

      ${fadeIn({ time: '.5s' })}
    }
  }
`
