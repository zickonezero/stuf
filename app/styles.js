// eslint-disable-next-line
import React from 'react' // Needed for styled() Extends
import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Main = styled.div`
  display: flex;
  max-width: 1256px;
`

export const Header = styled.div`
  justify-content: flex-start;
  width: 100%;
`

export const H1 = styled.h1`
  font-size: 80px;
  color: #333;
  margin: 30px;
`
