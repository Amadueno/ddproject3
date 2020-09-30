import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from 'axios'

const randClasses = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
const randRaces = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfling', 'Half-orc', 'Human', 'Tiefling']
const randBackgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Outlander', 'Noble', 'Sage', 'Sailor', 'Soldier', 'Urchin']
const randAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']
const randFactions = ['Harpers', 'Order of the Gauntlet', 'Emerald Enclave', 'Lords Alliance', 'Zhentarim']

var Generate = {

}

const Character = () => {
  const [characterState, setCharacterState] = useState({
    name: localStorage.getItem('name'),
    class: localStorage.getItem('class'),
    background: localStorage.getItem('background'),
    race: localStorage.getItem('race'),
    faction: localStorage.getItem('faction'),
    alignment: localStorage.getItem('alignment'),
    exp: localStorage.getItem('exp'),
    proficiency: ' ',
    inspiration: ' ',
    strength: ' ',
    athletics: ' ',
    dexterity: ' ',
    acrobatics: ' ',
    sleight_of_hand: ' ',
    stealth: ' ',
    constitution: ' ',
    intelligent: ' ',
    arcana: ' ',
    history: ' ',
    investigation: ' ',
    nature: ' ',
    religion: ' ',
    wisdom: ' ',
    animal_handling: ' ',
    insight: ' ',
    medicine: ' ',
    perception: ' ',
    survival: ' ',
    charisma: ' ',
    deception: ' ',
    intimidation: ' ',
    performance: ' ',
    persuasion: ' ',
    armor_class: ' ',
    initiative: ' ',
    speed: ' ',
    HP: ' ',
    temp_HP: ' ',
    hit_dice: ' ',
    death_save: ' ',
    successes: ' ',
    failures: ' ',
    character: []
  })

  characterState.handleRandomize = event => {
    event.preventDefault()
    const randClass = randClasses[Math.floor(Math.random() * randClasses.length)]
    const randRace = randRaces[Math.floor(Math.random() * randRaces.length)]
    const randBackground = randBackgrounds[Math.floor(Math.random() * randBackgrounds.length)]
    const randAlignment = randAlignments[Math.floor(Math.random() * randAlignments.length)]
    const randFaction = randFactions[Math.floor(Math.random() * randFactions.length)]
    localStorage.setItem('class', randClass)
    localStorage.setItem('race', randRace)
    localStorage.setItem('background', randBackground)
    localStorage.setItem('alignment', randAlignment)
    localStorage.setItem('faction', randFaction)
    window.location.reload()
  }

  characterState.handleInputChange = event => {
    setCharacterState({ ...characterState, [event.target.name]: localStorage.getItem(`${event.target.name}`) })
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })
    console.log('hi')
  }
  characterState.handleDicePage = event => {
    window.location.pathname = '../Dice/Dice.js'
  }
  characterState.handleNotePage = event => {
    window.location.pathname = '../Notes/Notes.js'
  }
  characterState.handleCreateCharacter = event => {
    event.preventDefault()
    axios.post('/api/characters', {
      name: characterState.name,
      class: characterState.class,
      background: characterState.background,
      race: characterState.race,
      faction: characterState.faction,
      alignment: characterState.alignment,
      exp: characterState.exp,
      proficiency: characterState.proficiency,
      inspiration: characterState.inspiration,
      strength: characterState.strength,
      athletics: characterState.athletics,
      dexterity: characterState.dexterity,
      constitution: characterState.constitution,
      intelligent: characterState.intelligent,
      acrobatics: characterState.acrobatics,
      arcana: characterState.arcana,
      animal_handling: characterState.animal_handling,
      history: characterState.history,
      wisdom: characterState.wisdom,
      intimidation: characterState.intimidation,
      insight: characterState.insight,
      investigation: characterState.investigation,
      medicine: characterState.medicine,
      nature: characterState.nature,
      perception: characterState.perception,
      performance: characterState.performance,
      persuasion: characterState.persuasion,
      religion: characterState.religion,
      sleight_of_hand: characterState.sleight_of_hand,
      stealth: characterState.stealth,
      survival: characterState.survival,
      charisma: characterState.charisma,
      deception: characterState.deception,
      armor_class: characterState.armor_class,
      initiative: characterState.initiative,
      speed: characterState.speed,
      HP: characterState.HP,
      temp_HP: characterState.temp_HP,
      hit_dice: characterState.hit_dice,
      death_save: characterState.death_save,
      successes: characterState.successes,
      failures: characterState.failures
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        setCharacterState({
          ...characterState,
          name: ' ',
          class: ' ',
          background: ' ',
          race: ' ',
          faction: ' ',
          alignment: ' ',
          exp: ' ',
          proficiency: ' ',
          inspiration: ' ',
          strength: ' ',
          athletics: ' ',
          dexterity: ' ',
          acrobatics: ' ',
          sleight_of_hand: ' ',
          stealth: ' ',
          constitution: ' ',
          intelligent: ' ',
          arcana: ' ',
          history: ' ',
          investigation: ' ',
          nature: ' ',
          religion: ' ',
          wisdom: ' ',
          animal_handling: ' ',
          insight: ' ',
          medicine: ' ',
          perception: ' ',
          survival: ' ',
          charisma: ' ',
          deception: ' ',
          intimidation: ' ',
          performance: ' ',
          persuasion: ' ',
          armor_class: ' ',
          initiative: ' ',
          speed: ' ',
          HP: ' ',
          temp_HP: ' ',
          hit_dice: ' ',
          death_save: ' ',
          successes: ' ',
          failures: ' '
        })
        localStorage.setItem('name', characterState.name)
        localStorage.setItem('class', characterState.class)
        localStorage.setItem('background', characterState.background)
        localStorage.setItem('race', characterState.race)
        localStorage.setItem('faction', characterState.faction)
        localStorage.setItem('alignment', characterState.alignment)
        localStorage.setItem('exp', characterState.exp)
        localStorage.setItem('proficiency', characterState.proficiency)
        localStorage.setItem('inspiration', characterState.inspiration)
        localStorage.setItem('strength', characterState.strength)
        localStorage.setItem('athletics', characterState.athletics)
        localStorage.setItem('dexterity', characterState.dexterity)
        localStorage.setItem('acrobatics', characterState.acrobatics)
        localStorage.setItem('sleight_of_hand', characterState.sleight_of_hand)
        localStorage.setItem('stealth', characterState.stealth)
        localStorage.setItem('constitution', characterState.constitution)
        localStorage.setItem('intelligent', characterState.intelligent)
        localStorage.setItem('arcana', characterState.arcana)
        localStorage.setItem('history', characterState.history)
        localStorage.setItem('investigation', characterState.investigation)
        localStorage.setItem('nature', characterState.nature)
        localStorage.setItem('religion', characterState.religion)
        localStorage.setItem('wisdom', characterState.wisdom)
        localStorage.setItem('animal_handling', characterState.animal_handling)
        localStorage.setItem('insight', characterState.insight)
        localStorage.setItem('medicine', characterState.medicine)
        localStorage.setItem('perception', characterState.perception)
        localStorage.setItem('survival', characterState.survival)
        localStorage.setItem('charisma', characterState.charisma)
        localStorage.setItem('deception', characterState.deception)
        localStorage.setItem('intimidation', characterState.intimidation)
        localStorage.setItem('performance', characterState.performance)
        localStorage.setItem('persuasion', characterState.persuasion)
        localStorage.setItem('armor_class', characterState.armor_class)
        localStorage.setItem('initiative', characterState.initiative)
        localStorage.setItem('speed', characterState.speed)
        localStorage.setItem('HP', characterState.HP)
        localStorage.setItem('temp_HP', characterState.temp_HP)
        localStorage.setItem('hit_dice', characterState.hit_dice)
        localStorage.setItem('death_save', characterState.death_save)
        localStorage.setItem('successes', characterState.successes)
        localStorage.setItem('failures', characterState.failures)
        window.location.pathname = '../Character/Character.js'
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <Form>
        <FormGroup row>
          <Label for='name' sm={2}>Name</Label>
          <Col sm={10}>
            <input
              type='name'
              name='name'
              value={characterState.name}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='class' sm={2}>Class</Label>
          <Col sm={10}>
            <input
              type='class'
              name='class'
              value={characterState.class}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='background' sm={2}>Background</Label>
          <Col sm={10}>
            <input
              type='background'
              name='background'
              value={characterState.background}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='race' sm={2}>Race</Label>
          <Col sm={10}>
            <input
              type='race'
              name='race'
              value={characterState.race}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='faction' sm={2}>Faction</Label>
          <Col sm={10}>
            <input
              type='faction'
              name='faction'
              value={characterState.faction}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='alignment' sm={2}>Alignment</Label>
          <Col sm={10}>
            <input
              type='alignment'
              name='alignment'
              value={characterState.alignment}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exp' sm={2}>Exp</Label>
          <Col sm={10}>
            <input
              type='exp'
              name='exp'
              value={characterState.exp}
              onChange={characterState.handleInputChange}
            />
          </Col>
        </FormGroup>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color='danger' onClick={characterState.handleCreateCharacter}
            style={{
              margin: '5px',
              marginBottom: '20px'
            }}>Create Character</Button>
          <Button color='danger' onClick={characterState.handleRandomize}
            style={{
              margin: '5px',
              marginBottom: '20px'
            }}>Random Character</Button>
        </Col>

      </Form>

    </>

  )
}
export default Character
