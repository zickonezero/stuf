// eslint-disable-next-line
import React from 'react' // Needed for styled() Extends
import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  ${props => props.align && `align-items: ${props.align}`}
  ${props => props.justify && `justify-content: ${props.justify}`}
`

export const Layout = styled(FlexContainer)`
  padding: 0 30px;
`

export const Main = styled(FlexContainer)`
  max-width: 1256px;
`

export const Header = styled(FlexContainer)``

export const H1 = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 40px;
  color: #ff0000;
  margin: 0;
`
