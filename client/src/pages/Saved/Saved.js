import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Saved = () => {
  const [savedState, setSavedState] = useState({
    saved: []
  })

  useEffect(() => {
    axios.get('/api/characters/')
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
      <h1>Your saved Character Sheet </h1>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(character => (
            <div key={character._id}>
              <p>
                {character.name}
                {character.class}
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
              </p>




             )

            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Saved
