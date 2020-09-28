import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components'
import Note from '../components/Note'

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const NotePage = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } })

  // if the data is successful, display the data in our UI
  return (
    <NoteWrapper>
      <Link to="/">Back to notes</Link>
      {(() => {
        // if the data is loading, display a loading message
        if (loading) return <p>Loading...</p>
        // if there is an error fetching the data, display an error message
        if (error) return <p>Error! Note not found</p>
        return <Note note={data.note} />
      })()}
    </NoteWrapper>
  )
}

const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
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
`

export default NotePage
