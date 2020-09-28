import Axios from 'axios'
import React, { useState, useEffect } from 'react'

const Saved = () => {
  const [savedState, setSavedState] = useState({
    saved: []
  })

  useEffect(() => {
    Axios.get('/api/characters/')
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
      <h1>Your saved Movies/TV</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(media => (
            <div key={media.imdbID}>
              <img src={media.poster} alt={media.title} />
              <h3>{media.title}</h3>
              <h4>Type: {media.type}</h4>
              <h4>Year: {media.year}</h4>
              <h5>imdbID: {media.imdbID}</h5>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved
