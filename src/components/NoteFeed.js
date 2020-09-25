import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const NoteFeed = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>

  return (
    <div>
      {data.noteFeed.notes.map(note => (
        <NoteWrapper key={note.id}>
          <Note note={note} />
        </NoteWrapper>
      ))}
    </div>
  )
}

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`

export default NoteFeed
