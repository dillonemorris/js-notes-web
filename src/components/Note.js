import React from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'date-fns'
import styled from 'styled-components'
import FavoriteToggle from '../components/FavoriteToggle'

const StyledNote = styled.article`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { shadow } }) => shadow.sm};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.rounded};
`

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
  }
`

const MetaInfo = styled.div`
  padding-right: 1em;
`

const UserActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
`

const Note = ({ note }) => {
  return (
    <StyledNote>
      <ReactMarkdown source={note.content} />
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt="{note.author.username} avatar"
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(note.createdAt, 'MMM Do YYYY')}
        </MetaInfo>
        <UserActions>
          <FavoriteToggle favoriteCount={note.favoriteCount} />
        </UserActions>
      </MetaData>
    </StyledNote>
  )
}

export default Note
