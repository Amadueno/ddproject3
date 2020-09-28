import React, { useState } from 'react'
// import User from '../User/User.js'
import {
  Form,
  FormGroup,
  Label,
  Input,
  CardColumns,
  Card,
  Col,
  CardBody,
  Row
} from 'reactstrap'
import axios from 'axios'
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
  characterState.handleInputChange = event => {
    setCharacterState({ ...characterState, [event.target.name]: localStorage.getItem(`${event.target.name}`) })
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })
    console.log('hi')
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

  // characterState.handleModifyCharacter = event => {
  //   event.preventDefault()
  //   // axios.post
  //   // send the req.body=characterState
  // }
  return (
    <>

      <CardColumns>
        {/* Chara info */}
        <Row>
          <Card>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for='CharacterName' sm={2}>Character Name</Label>
                  <br />
                  <Input type='characterName' name='characterName' id='CharacterName' defaultValue={localStorage.getItem('name')} />
                </FormGroup>
                <Row>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='PlayerName' sm={2}>Player</Label>
                      <Input type='player' name='player' id='PlayerName' defaultValue={localStorage.getItem('username')} />
                    </FormGroup>
                  </Col>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='Class' sm={2}>Class</Label>
                      <Input type='class' name='class' id='Class' defaultValue={localStorage.getItem('class')} />
                    </FormGroup>
                  </Col>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='background' sm={2}>Background</Label>
                      <Input type='background' name='background' id='background' defaultValue={localStorage.getItem('background')} />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='Race' sm={2}>Race</Label>
                      <Input type='race' name='race' id='Race' defaultValue={localStorage.getItem('race')} />
                    </FormGroup>
                  </Col>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='alignment' sm={2}>Alignment</Label>
                      <Input type='alignment' name='alignment' id='alignment' defaultValue={localStorage.getItem('alignment')} />
                    </FormGroup>
                  </Col>
                  <Col xs={4}>
                    <FormGroup row>
                      <Label for='Exp' sm={2}>Exp</Label>
                      <Input type='exp' name='exp' id='Exp' defaultValue={localStorage.getItem('exp')} />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Row>
        {/* stats */}
        <Row>
          <Col lg='6'>
            <Card>
              <CardBody>
                <Form>
                  <hr />
                  <FormGroup>
                    <Label for='proficiency'>Profieciency Bonus</Label>
                    <Input type='text' name='proficiency' id='proficiency' defaultValue={localStorage.getItem('proficiency')} />
                    <Label for='inspiration'>Inspiration</Label>
                    <Input type='text' name='inspiration' id='inspiration' defaultValue={localStorage.getItem('inspiration')} />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='strength'>Strength</Label>
                    <Input type='text' name='strength' id='strength' defaultValue={localStorage.getItem('strength')} />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Athletics
                    </Label>
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='dexterity'>Dexterity</Label>
                    <Input type='text' name='dexterity' id='dexterity' defaultValue={localStorage.getItem('dexterity')} />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Acrobatics
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Sleight of Hand
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Stealth
                    </Label>
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='constitution'>Constitution</Label>
                    <Input type='text' name='constitution' id='constitution' defaultValue={localStorage.getItem('constitution')} />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='intelligence'>Intelligence</Label>
                    <Input type='text' name='intelligence' id='intelligence' defaultValue={localStorage.getItem('intelligence')} />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Arcana
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> History
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Investigation
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Nature
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Religion
                    </Label>
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='wisdom'>Wisdom</Label>
                    <Input type='text' name='wisdom' id='wisdom' defaultValue={localStorage.getItem('wisdom')} />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Animal Handling
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Insight
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Medicine
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Perception
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Survival
                    </Label>
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for='charisma'>Charisma</Label>
                    <Input type='text' name='charisma' id='charisma' defaultValue={localStorage.getItem('charisma')} />
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Deception
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Intimidation
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Performance
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      <Input type='checkbox' /> Persuasion
                    </Label>
                  </FormGroup>
                </Form>
                <hr />
              </CardBody>
            </Card>
          </Col>
          {/* HP/AC */}
          <Col lg='6'>
            <Card>
              <CardBody>
                <Form>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='armor'>Armor Class</Label>
                        <Input type='text' name='armor' id='armor' defaultValue={localStorage.getItem('armor')} />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='initiviate'>Initiative</Label>
                        <Input type='text' name='initiative' id='initiviate' defaultValue={localStorage.getItem('initiative')} />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for='speed'>Speed</Label>
                        <Input type='text' name='speed' id='speed' defaultValue={localStorage.getItem('speed')} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for='hitPoints'>Hit Points</Label>
                    <Input type='text' name='hitPoints' id='hitPoints' defaultValue={localStorage.getItem('HP')} />
                  </FormGroup>
                  <FormGroup>
                    <Label for='tempHitPoints'>Temporary Hit Points</Label>
                    <Input type='text' name='tempHitPoints' id='tempHitPoints' defaultValue={localStorage.getItem('temp_HP')} />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for='hitDice'>Hit Dice</Label>
                        <Input type='text' name='hitDice' id='hitDice' defaultValue={localStorage.getItem('hit_dice')} />
                        <br />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <Label for='deathSaves'>Death Saves</Label>
                      <br />
                      <FormGroup check inline>
                        {/* Successes */}
                        <Label check>
                          Successes
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
                        {/* Failures */}
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
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardColumns>
    </>
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
