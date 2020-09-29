import React, { useState } from 'react'
import './dndstyles.css'

// import User from '../User/User.js'
import {
  FormGroup,
  Label,
  Col,
  CardBody,
  Row,
  Input,
  Button
} from 'reactstrap'
import axios from 'axios'

const randClasses = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
const randRaces = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'tiefling']
const randBackgrounds = ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'outlander', 'noble', 'sage', 'sailor', 'solider', 'urchin']
const randAlignments = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'neutral', 'chaotic neutral', 'lawful evil', ' neutral evil', 'chaotic evil']
const randFactions = ['Harpers', 'Order of the Gauntlet', 'Emerald Enclave', 'Lords Alliance', 'Zhentarim']

const Character = () => {
  const [characterState, setCharacterState] = useState({
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
    failures: ' ',
    character: []
  })

  // var Generate = {

  // }

  characterState.handleInputChange = event => {
    // if (event.target.name !== 'characterName') {
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })

    localStorage.setItem(`${event.target.name}`, event.target.value)
    // } else {
    //   setCharacterState({ ...characterState, name: localStorage.getItem('characterName') })

    //   localStorage.setItem('characterName', event.target.value)
    // }
    console.log('hi')
    console.log(event.target.name)
    console.log(characterState.name)
  }

  characterState.handleDicePage = event => {
    window.location.pathname = '../Dice/Dice.js'
  }

  characterState.handleNotePage = event => {
    window.location.pathname = '../Note/Note.js'
  }

  characterState.handleRandomize = event => {
    const randClass = randClasses[Math.floor(Math.random() * randClasses.length)]
    const randRace = randClasses[Math.floor(Math.random() * randClasses.length)]
    const randBackground = randBackgrounds[Math.floor(Math.random() * randBackgrounds.length)]
    const randAlignment = randAlignments[Math.floor(Math.random() * randAlignments.length)]
    const randFaction = randFactions[Math.floor(Math.random() * randFactions.length)]

    localStorage.setItem('class', randClass)
    localStorage.setItem('race', randRace)
    localStorage.setItem('background', randBackground)
    localStorage.setItem('alignment', randAlignment)
    localStorage.setItem('faction', randFaction)

    setCharacterState({
      ...characterState,
      name: localStorage.getItem('name'),
      class: randClass,
      race: randRace,
      background: randBackground,
      alignment: randAlignment,
      faction: randFaction,
      exp: localStorage.getItem('exp')
    })

    console.log(characterState)
  }

  characterState.handleCreateCharacter = event => {
    event.preventDefault()

    setCharacterState({
      ...characterState,
      name: localStorage.getItem('name'),
      class: localStorage.getItem('class'),
      background: localStorage.getItem('background'),
      race: localStorage.getItem('race'),
      faction: localStorage.getItem('race'),
      alignment: localStorage.getItem('alignment'),
      exp: localStorage.getItem('exp'),
      proficiency: localStorage.getItem('profiency'),
      inspiration: localStorage.getItem('inspiration'),
      strength: localStorage.getItem('strength'),
      athletics: localStorage.getItem('athletics'),
      dexterity: localStorage.getItem('dexterity'),
      acrobatics: localStorage.getItem('acrobatics'),
      sleight_of_hand: localStorage.getItem('sleight_of_hand'),
      stealth: localStorage.getItem('stealth'),
      constitution: localStorage.getItem('constitution'),
      intelligent: localStorage.getItem('intelligent'),
      arcana: localStorage.getItem('arcana'),
      history: localStorage.getItem('history'),
      investigation: localStorage.getItem('investigation'),
      nature: localStorage.getItem('nature'),
      religion: localStorage.getItem('religion'),
      wisdom: localStorage.getItem('wisdom'),
      animal_handling: localStorage.getItem('animal_handling'),
      insight: localStorage.getItem('insight'),
      medicine: localStorage.getItem('medicine'),
      perception: localStorage.getItem('perception'),
      survival: localStorage.getItem('survival'),
      charisma: localStorage.getItem('charisma'),
      deception: localStorage.getItem('deception'),
      intimidation: localStorage.getItem('intimidation'),
      performance: localStorage.getItem('performance'),
      persuasion: localStorage.getItem('persuasion'),
      armor_class: localStorage.getItem('armor_class'),
      initiative: localStorage.getItem('initiative'),
      speed: localStorage.getItem('speed'),
      HP: localStorage.getItem('HP'),
      temp_HP: localStorage.getItem('temp_HP'),
      hit_dice: localStorage.getItem('hit_dice'),
      death_save: localStorage.getItem('death_save'),
      successes: localStorage.getItem('successes'),
      failures: localStorage.getItem('failures')
    })

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
      acrobatics: characterState.acrobatics,
      sleight_of_hand: characterState.sleight_of_hand,
      stealth: characterState.stealth,
      constitution: characterState.constitution,
      intelligent: characterState.intelligent,
      arcana: characterState.arcana,
      history: characterState.history,
      investigation: characterState.investigation,
      nature: characterState.nature,
      religion: characterState.religion,
      wisdom: characterState.wisdom,
      animal_handling: characterState.animal_handling,
      insight: characterState.insight,
      medicine: characterState.medicine,
      perception: characterState.perception,
      survival: characterState.survival,
      charisma: characterState.charisma,
      deception: characterState.deception,
      intimidation: characterState.intimidation,
      performance: characterState.performance,
      persuasion: characterState.persuasion,
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
        localStorage.setItem('characterName', characterState.name)
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

  // characterState.handleModifyCharacter = event => {
  //   event.preventDefault()
  //   // axios.post
  //   // send the req.body=characterState
  // }
  return (
    <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
      <h3>Character Sheet</h3>
      <div>
        <div className='row mb-4'>
          <div className='col-md-3 pr-2 pl-2'>
            <div className='d-and-d-page-title' />
            <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
              <Input type='name' name='name' id='name' onChange={characterState.handleInputChange} />
            </div>
            <label
              style={{
                width: '100%',
                textAlign: 'right',
                textTransform: 'uppercase',
                fontSize: '11px'
              }}
            >
              Character Name
            </label>
          </div>
          <div className='col-md-9 pr-2 pl-2'>
            <div className='d-and-d-attribute-collection pr-3 pl-3'>
              <div className='row pl-3 pr-3'>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='class' name='class' id='Class' value={localStorage.getItem('class')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Class & Level
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='background' name='background' id='background' value={localStorage.getItem('background')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Background
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='faction' name='faction' id='faction' value={localStorage.getItem('faction')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Faction
                  </label>
                </div>
              </div>
              <div className='row pl-3 pr-3'>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='race' name='race' id='Race' value={localStorage.getItem('race')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Race
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='alignment' name='alignment' id='Alignment' value={localStorage.getItem('alignment')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Alignment
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='exp' name='exp' id='Exp' onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Experience Points
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          color='danger' onClick={characterState.handleCreateCharacter}
          style={{
            margin: '5px',
            marginBottom: '20px'
          }}
        >Create Character
        </Button>
        <Button
          color='danger' onClick={characterState.handleRandomize}
          style={{
            margin: '5px',
            marginBottom: '20px'
          }}
        >Random Character
        </Button>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-4 pr-1'>
                <div className='d-and-d-box gray'>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Strength</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Dexterity</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Constitution</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Intelligence</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Wisdom</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Charisma</label>
                      <div className='d-and-d-statbox-modifier' />
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-8'>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    <input
                      type='text'
                    />
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Inspiration</label>
                  </div>
                </div>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    <input
                      type='text'
                    />
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Proficiency Bonus</label>
                  </div>
                </div>
                <div className='d-and-d-box'>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Strength</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Dexterity</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Constitution</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Intelligence</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Widsom</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Charisma</label>
                  </div>
                  <label
                    className='d-and-d-title'
                    style={{ marginTop: '10px' }}
                  >
                    Saving Throws
                  </label>
                </div>
                <div className='d-and-d-box'>
                  <div style={{ textAlign: 'left' }}>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Acrobatics</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>

                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Animal Handling</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Acrobatics</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Arcana</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Athletics</label>
                      <span className='d-and-d-skill-hint'>Str</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Deception</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>History</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Intimidation</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Investigation</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Medicine</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Nature</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Perception</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Performance</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Persuasion</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Religion</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Sleight of Hand</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Stealth</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Survival</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                  </div>
                  <Label
                    className='d-and-d-title'
                    style={{ marginTop: '10px' }}
                  >
                    Skills
                  </Label>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='d-and-d-statrow'>
                <div className='d-and-d-statrow-value'>
                  <input
                    type='text'
                  />
                </div>
                <div className='d-and-d-statrow-label'>
                  <label>Passive Wisdom (Perception)</label>
                </div>
              </div>
            </div>
            <div className='d-and-d-box mt-4'>
              <textarea
                rows={12}
              />
              <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                Other Proficiencies and Languages
              </label>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='d-and-d-box gray'>
              <div className='row'>
                <div className='col-4 pr-2'>
                  <div>
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text'
                        />
                      </div>
                      <div>
                        <label className='label-top'>Armour Class</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text'
                        />
                      </div>
                      <div>
                        <label className='label-top'>Initiative</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text'
                        />
                      </div>
                      <div>
                        <label className='label-top'>Speed</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='d-and-d-box white'
                style={{
                  borderRadius: '8px 8px 0 0',
                  marginBottom: '5px',
                  paddingBottom: '5px'
                }}
              >
                <div className='d-and-d-gray-text'>
                  <label style={{ width: '95px' }}>Hit Point Maximum</label>
                  <Input
                    type='text'
                    style={{ width: 'calc(100% = 95px)' }}
                    className='d-and-d-linput'
                  />
                </div>
                <Input
                  type='text'
                  className='d-and-d-cinput'
                />
                <label className='d-and-d-title' style={{ marginTop: '5px' }}>Current Hit Points</label>
              </div>
              <div className='col-6 pl-1'>
                <div className='d-and-d-box white mb-0'>
                  <div className='d-and-d-deathsave'>
                    <FormGroup check inline>
                      <Label
                        style={{
                          marginBottom: '5px'
                        }} check
                      >
                        Sucesses
                        <Input type='checkbox' />
                      </Label>
                      <Label check>
                        <Input type='checkbox' />
                      </Label>
                      <Label check>
                        <Input type='checkbox' />
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        Failures
                        <Input type='checkbox' />
                      </Label>
                      <Label check>
                        <Input type='checkbox' />
                      </Label>
                      <Label check>
                        <Input type='checkbox' />
                      </Label>
                    </FormGroup>
                  </div>
                  <label
                    className='d-and-d-title'
                    style={{ marginTop: '6px' }}
                  >
                    Death Saves
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='d-and-d-box mt-3'>
            <table className='d-and-d-table'>
              <thead className='d-and-d-table'>
                <tr>
                  <th>Name </th>
                  <th style={{ width: '70px' }}>Atk Bonus</th>
                  <th>Damage/Type</th>
                </tr>
              </thead>
            </table>
            <tr className='d-and-d-table-row-'>
              <td>
                <input type='text' />
              </td>
              <td>
                <input type='text' />
              </td>
              <td>
                <input type='text' />
              </td>
            </tr>
            <textarea
              rows={6}
            />
            <label className='d-and-d-title' style={{ marginTop: '10px' }}>
              Attacks & Spellcasting
            </label>
          </div>
          <div className='d-and-d-box mt-4'>
            <div className='row'>
              <div style={{ width: '100px' }}>
                <div className='d-and-d-currency'>
                  <div className='d-and-d-currency-label'>
                    <label>CP</label>
                  </div>
                  <div className='d-and-d-currency-value'>
                    <input
                      type='text'
                    />
                  </div>
                </div>
                <div className='d-and-d-currency'>
                  <div className='d-and-d-currency-label'>
                    <label>SP</label>
                  </div>
                  <div className='d-and-d-currency-value'>
                    <input
                      type='text'
                    />
                  </div>
                </div>
                <div className='d-and-d-currency'>
                  <div className='d-and-d-currency-label'>
                    <label>EP</label>
                  </div>
                  <div className='d-and-d-currency-value'>
                    <input
                      type='text'
                    />
                  </div>
                </div>
                <div className='d-and-d-currency'>
                  <div className='d-and-d-currency-label'>
                    <label>GP</label>
                  </div>
                  <div className='d-and-d-currency-value'>
                    <input
                      type='text'
                    />
                  </div>
                </div>
                <div className='d-and-d-currency'>
                  <div className='d-and-d-currency-label'>
                    <label>PP</label>
                  </div>
                  <div className='d-and-d-currency-value'>
                    <input
                      type='text'
                    />
                  </div>
                </div>
              </div>
              <div className='col'>
                <textarea
                  className='d-and-d-equipment-indent'
                  rows={10}
                />
              </div>
              <div className='col-md-12'>
                <textarea
                  rows={4}
                />
              </div>
              <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                Equipment
              </label>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div
            className='d-and-d-box gray'
            style={{ marginBottom: '17px' }}
          >
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '8px 8px 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}
            >
              <textarea
                rows={3}
              />
              <label className='d-and-d-title'>Personality Traits</label>
            </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}
            >
              <textarea
                rows={3}
              />
              <label className='d-and-d-title'>Ideals</label>
            </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}
            >
              <textarea rows={2} />
              <label className='d-and-d-title'>Bonds</label>
            </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 8px 8px',
                marginBottom: '0px',
                paddingTop: '1px',
                paddingBottom: '4px'
              }}
            >
              <textarea rows={2} />
              <label className='d-and-d-title'>Flaws</label>
            </div>
          </div>
          <div className='d-and-d-box mt-3'>
            <textarea
              style={{ paddingBottom: '5px' }}
              rows={27}
            />
            <label className='d-and-d-title' style={{ marginTop: '10px' }}>
              Features & Traits
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Character

// const Character = (props) => {
//   return (
//     <Form>
//       <FormGroup row>
//         <Label for="CharacterName" sm={2}>Character Name</Label>
//         <Col sm={10}>
//           <Input type="characterName" name="characterName" id="CharacterName" />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="PlayerName" sm={2}>Player</Label>
//         <Col sm={10}>
//           <Input type="player" name="player" id="PlayerName" />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="Class" sm={2}>Class</Label>
//         <Col sm={10}>
//           <Input type="class" name="class" id="Class" />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="Race" sm={2}>Race</Label>
//         <Col sm={10}>
//           <Input type="race" name="race" id="Race" />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="Exp" sm={2}>Exp</Label>
//         <Col sm={10}>
//           <Input type="exp" name="exp" id="Exp" />
//         </Col>
//       </FormGroup>
//       <Form>
//         <hr />
//         <Col md={2}>
//           <FormGroup>
//             <Label for="strength">Strength</Label>
//             <Input type="text" name="strength" id="strength" />
//           </FormGroup>
//         </Col>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Athletics
//         </Label>
//         </FormGroup>
//         <hr />
//         <Col md={2}>
//           <FormGroup>
//             <Label for="dexterity">Dexterity</Label>
//             <Input type="text" name="dexterity" id="dexterity" />
//           </FormGroup>
//         </Col>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Acrobatics
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Sleight of Hand
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Stealth
//         </Label>
//         </FormGroup>
//         <hr />
//         <Col md={2}>
//           <FormGroup>
//             <Label for="constitution">Constitution</Label>
//             <Input type="text" name="constitution" id="constitution" />
//           </FormGroup>
//         </Col>
//         <hr />
//         <Col md={2}>
//           <FormGroup>
//             <Label for="intelligence">Intelligence</Label>
//             <Input type="text" name="intelligence" id="intelligence" />
//           </FormGroup>
//         </Col>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Arcana
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> History
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Investigation
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Nature
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Religion
//         </Label>
//         </FormGroup>
//         <hr/>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="wisdom">Wisdom</Label>
//             <Input type="text" name="wisdom" id="wisdom" />
//           </FormGroup>
//         </Col>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Animal Handling
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Insight
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Medicine
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Perception
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Survival
//         </Label>
//         </FormGroup>
//         <hr />
//         <Col md={2}>
//           <FormGroup>
//             <Label for="charisma">Charisma</Label>
//             <Input type="text" name="charisma" id="charisma" />
//           </FormGroup>
//         </Col>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Deception
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Intimidation
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Performance
//         </Label>
//         </FormGroup>
//         <FormGroup check inline>
//           <Label check>
//             <Input type="checkbox" /> Persuasion
//         </Label>
//         </FormGroup>
//       </Form>
//     </Form>
//   )
// }

// export default Character
