import React from 'react'
import Note from './Note'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const NoteFeed = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES)

  return (
    <PageWrapper>
      {(() => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error!</p>
        return data.noteFeed.notes.map(note => (
          <Link to={`note/${note.id}`} key={note.id}>
            <Note note={note} />
          </Link>
        ))
      })()}
    </PageWrapper>
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
