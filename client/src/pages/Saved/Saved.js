import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import axios from 'axios'
import '../Character/dndstyles.css'
import {
  FormGroup,
  Label,
  Col,
  Input,
  Button,
} from 'reactstrap'
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
            var joined = []
            data.characters.forEach(characterId => {
              console.log(characterId)
              axios.get(`/api/characters/${characterId}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('user')}`
                }
              })
                .then(({ data }) => {
                  console.log({ data })
                  joined.push(data)
                  setSavedState({ ...savedState, saved: joined })
                  console.log(savedState.saved)
                })
                .catch(err => console.log(err))
            })
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
      <h1 className='savedCharacter mt-5 mb-5'>Your Saved Characters:</h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(character => (
          <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
            <div key={character.name}>
              <div>
                <div className='row mb-4'>
                  <div className='col-md-3 pr-2 pl-2'>
                    <div className='d-and-d-page-title'></div>
                    <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
                        <Input type='name' name='name' id='name'
                          value={character.name} />
                    </div>
                    <label
                      style={{
                        width: '100%',
                        textAlign: 'right',
                        textTransform: 'uppercase',
                        fontSize: '11px'
                      }}>
                      Character Name
            </label>
                  </div>
                  <div className='col-md-9 pr-2 pl-2'>
                    <div className='d-and-d-attribute-collection pr-3 pl-3'>
                      <div className='row pl-3 pr-3'>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='class' name='class' id='class'
                              value={character.class}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Class & Level</label>
                        </div>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='background' name='background' id='background'
                              value={character.background}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Background</label>
                        </div>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='faction' name='name' id='faction'
                              value={character.faction}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Faction</label>
                        </div>
                      </div>
                      <div className='row pl-3 pr-3'>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='race' name='race' id='race'
                              value={character.race}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Race</label>
                        </div>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='alignment' name='alignment' id='Alignment'
                              value={character.alignment}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Alignment</label>
                        </div>
                        <div className='col-md-3 col-6 pl-0 pr-0'>
                            <Input type='exp' name='exp' id='exp'
                              value={character.exp}/>
                          <label
                            style={{
                              width: '100%',
                              textAlign: 'right',
                              textTransform: 'uppercase',
                              fontSize: '11px'
                            }}>Experience Points</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
