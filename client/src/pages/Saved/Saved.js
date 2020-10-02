import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import axios from 'axios'

const Saved = () => {
  const characterArray = []
  const [savedState, setSavedState] = useState({
    saved: []
  })

  useEffect(() => {
    // axios.get('/api/characters')
    axios.get('/api/users/characters', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        setSavedState({
          ...savedState, saved: data
        })
      })
  }, [])

  return (
    <>
      <h1>Your saved Characters</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(character => (
            <div key={character._id}>
              <p>
                <h1>{character.name}</h1>
                {/* {character.class}
          {character.background}
          {character.race}
          {character.faction}
          {character.alignment}
          {character.exp}
          {character.proficiency}
          {character.inspiration}
          {character.strength}
          {character.athletics}
          {character.dexterity}
          {character.acrobatics}
          {character.sleight_of_hand}
          {character.stealth}
          {character.constitution}
          {character.intelligent}
          {character.arcana}
          {character.history}
          {character.investigation}
          {character.nature}
          {character.religion}
          {character.wisdom}
          {character.animal_handling}
          {character.insight}
          {character.medicine}
          {character.perception}
          {character.survival}
          {character.charisma}
          {character.deception}
          {character.intimidation}
          {character.performance}
          {character.persuasion}
          {character.armor_class}
          {character.initiative}
          {character.speed}
          {character.HP}
          {character.temp_HP}
          {character.hit_dice}
          {character.death_save}
          {character.successes}
          {character.failures} */}
              </p>
            </div>
          )
            // </div>
          )
        ) : null
      }
      {/* {
        savedState.saved.characters.length > 0 ? (
          savedState.saved.characters.map(media => (
            <div>

              <h3>{media.title}</h3>
              <h4>Type: {media.type}</h4>
              <h4>Year: {media.year}</h4>
              <h5>imdbID: {media.imdbID}</h5>
              <button onClick={() => savedState.handleDeleteSaved(media._id)}>Delete</button>
            </div>
          ))
        ) : null
      } */}
    </>
  )
}

export default Saved

// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// const Saved = () => {
//   const [savedState, setSavedState] = useState({
//     saved: []
//   })

//         console.log(savedState.saved)
//         console.log(data.characters)
//         console.log(savedState.saved)
//       })
//   }, [])
//   return (
//     <>
//       <h1>Your saved Character Sheet </h1>
//       {/* {
//         savedState.saved.length > 0 ? (
//           savedState.saved.map(character => (
//             // <div key={character._id}>
//         <p>
//           <h1>{character.name}</h1>
//           {character.class}
//           {character.background}
//           {character.race}
//           {character.faction}
//           {character.alignment}
//           {character.exp}
//           {character.proficiency}
//           {character.inspiration}
//           {character.strength}
//           {character.athletics}
//           {character.dexterity}
//           {character.acrobatics}
//           {character.sleight_of_hand}
//           {character.stealth}
//           {character.constitution}
//           {character.intelligent}
//           {character.arcana}
//           {character.history}
//           {character.investigation}
//           {character.nature}
//           {character.religion}
//           {character.wisdom}
//           {character.animal_handling}
//           {character.insight}
//           {character.medicine}
//           {character.perception}
//           {character.survival}
//           {character.charisma}
//           {character.deception}
//           {character.intimidation}
//           {character.performance}
//           {character.persuasion}
//           {character.armor_class}
//           {character.initiative}
//           {character.speed}
//           {character.HP}
//           {character.temp_HP}
//           {character.hit_dice}
//           {character.death_save}
//           {character.successes}
//           {character.failures}
//         </p>
//           )
//             // </div>
//           )
//         ) : null
//       } */}
//     </>
//   )
// }
// export default Saved
