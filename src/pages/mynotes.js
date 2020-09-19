import React, { useEffect } from 'react'

const MyNotes = () => {
  useEffect(() => {
    // update the document title
    document.title = 'My Notes — Notes.js'
  })

  return (
    <div>
      <h1>Notes.js</h1>
      <p>These are my notes</p>
    </div>
  )
}

export default MyNotes
