import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #acc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
`
