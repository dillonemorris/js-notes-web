import React, { useEffect } from 'react'

const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = 'Favorites — Notes.js'
  })

  return (
    <div>
      <h1>Notes.js</h1>
      <p>These are my favorites</p>
    </div>
  )
}

export default Favorites
