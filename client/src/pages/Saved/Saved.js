import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import axios from 'axios'

const Saved = () => {
  const [savedState, setSavedState] = useState({
    saved: []
  })

  useEffect(() => {
    // axios.get('/api/characters')
    axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(users => {
        console.log(users.data)
        const rightUser = users.data.filter(user => user.username === localStorage.getItem('username'))
        console.log(rightUser[0])
        axios.get(`/api/users/${rightUser[0]._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`
          }
        })
          .then(({ data }) => {
            console.log(data)
            data.characters.forEach(characterId =>
              axios.get(`/api/characters/${characterId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('user')}`
                }
              })
                .then(({ data }) => {
                  console.log({ data })
                  setSavedState({ ...savedState, saved: [data] })
                  console.log(savedState.saved)
                })
                .catch(err => console.log(err))
            )
            // setCharacterState({ ...characterState, [event.target.name]: event.target.checked })

            // setSavedState({ ...savedState, saved: [characterArray] }

            // setSavedState({
            //   ...savedState, saved: data.characters
            // })
          })
          .catch(err => console.log(err))
      }).catch(err => console.log(err))

    axios.get('/api/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(users => {
        console.log(users.data)
        const rightUser = users.data.filter(user => user.username === localStorage.getItem('username'))
        console.log(rightUser[0])
        axios.get(`/api/users/${rightUser[0]._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('user')}`
          }
        })
          .then(({ data }) => {
            console.log(data)
            data.notes.forEach(notesId =>
              axios.get(`/api/characters/${noteId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('user')}`
                }
              })
                .then(({ data }) => {
                  console.log({ data })
                  setSavedState({ ...savedState, saved: [data] })
                  console.log(savedState.saved)
                })
                .catch(err => console.log(err))
            )
            // setCharacterState({ ...characterState, [event.target.name]: event.target.checked })

            // setSavedState({ ...savedState, saved: [characterArray] }

            // setSavedState({
            //   ...savedState, saved: data.characters
            // })
          })
          .catch(err => console.log(err))
      }).catch(err => console.log(err))

    // axios.get('/api/characters', {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('user')}`
    //   }
    // })
    //   .then(({ data }) => {
    //     setSavedState({
    //       ...savedState, saved: data
    //     })
    //   })
    // console.log(savedState)
  }, [])
  return (
    <>
      <h1>Your saved Characters</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(character => (
            <div>

              <h1>{character.name}</h1>
              <h1>{character.class}</h1>
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
              {character.failures}

            </div>
          ))
        ) : null
      }
      <h1>Your saved Notes</h1>
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
