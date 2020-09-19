import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import { Home } from '../components/icons/Home'
import { Notes } from '../components/icons/Notes'
import { Favorites } from '../components/icons/Favorites'

const Nav = styled.nav`
  padding: 1em;
  background: ${props => props.theme.colors.gray100};

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 1em;
    color: ${({ theme: { colors } }) => colors.gray600};
    margin-left: 12px;
  }

  a:hover {
    color: ${({ theme: { colors } }) => colors.gray800};
  }
`

const Navigation = () => {
  const { colors } = useContext(ThemeContext)
  return (
    <Nav>
      <NavList>
        <li>
          <Home />
          <NavLink activeStyle={{ color: colors.gray800 }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <Notes />
          <NavLink activeStyle={{ color: colors.gray800 }} to="/mynotes">
            My Notes
          </NavLink>
        </li>
        <li>
          <Favorites />
          <NavLink activeStyle={{ color: colors.gray800 }} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </NavList>
    </Nav>
  )
}

export default Navigation
