import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray200};
  z-index: 1;
`

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
  margin-left: 8px;
  font-size: 28px;
`

const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt="Notes.js Logo" height="34" />
      <LogoText>Notes.js</LogoText>
    </HeaderBar>
  )
}

export default Header
