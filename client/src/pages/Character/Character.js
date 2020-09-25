import React from 'react'
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
  Row,
} from 'reactstrap'

const Character = () => {
  const [characterState, setCharacterState] = useState({
    name: ' ',
    class: ' ',
    background: ' ',
    race: ' ',
    faction: ' ',
    alignment: ' ',
    exp: ' ',
    character: []
  })
  characterState.handleInputChange = event => {
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })
    console.log('hi')
  }
  characterState.handleCreateCharacter = event => {
    event.preventDefault()
    // axios.post
    // send the req.body=characterState
  }
  return (
  <>
  
    <CardColumns>
      {/* Chara info */}
      <Row>
        <Card>
          <CardBody>
            <Form>
              <FormGroup row>
                <Label for="CharacterName" sm={2}>Character Name</Label>
                <br />
                <Input type="characterName" name="characterName" id="CharacterName" />
              </FormGroup>
            <Row>
              <Col xs={4}>
              <FormGroup row>
                <Label for="PlayerName" sm={2}>Player</Label>
                <Input type="player" name="player" id="PlayerName" />
              </FormGroup>
              </Col>
              <Col xs={4}>
              <FormGroup row>
                <Label for="Class" sm={2}>Class</Label>
                <Input type="class" name="class" id="Class" />
              </FormGroup>
              </Col>
              <Col xs={4}>
              <FormGroup row>
                <Label for="background" sm={2}>Background</Label>
                <Input type="background" name="background" id="background" />
              </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
              <FormGroup row>
                <Label for="Race" sm={2}>Race</Label>
                <Input type="race" name="race" id="Race" />
              </FormGroup>
              </Col>
              <Col xs={4}>
              <FormGroup row>
                <Label for="alignment" sm={2}>Alignment</Label>
                <Input type="alignment" name="alignment" id="alignment" />
              </FormGroup>
              </Col>
              <Col xs={4}>
              <FormGroup row>
                <Label for="Exp" sm={2}>Exp</Label>
                <Input type="exp" name="exp" id="Exp" />
              </FormGroup>
              </Col>
            </Row>
            </Form>
          </CardBody>
        </Card>
      </Row>
{/* stats */}
      <Row>
        <Col lg="6">
        <Card>
          <CardBody>
            <Form>
              <hr />
              <FormGroup>
                <Label for="proficiency">Profieciency Bonus</Label>
                <Input type="text" name="proficiency" id="proficiency" />
                <Label for="inspiration">Inspiration</Label>
                <Input type="text" name="inspiration" id="inspiration" />
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="strength">Strength</Label>
                <Input type="text" name="strength" id="strength" />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Athletics
                </Label>
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="dexterity">Dexterity</Label>
                <Input type="text" name="dexterity" id="dexterity" />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Acrobatics
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Sleight of Hand
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Stealth
                </Label>
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="constitution">Constitution</Label>
                <Input type="text" name="constitution" id="constitution" />
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="intelligence">Intelligence</Label>
                <Input type="text" name="intelligence" id="intelligence" />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Arcana
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> History
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Investigation
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Nature
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Religion
                </Label>
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="wisdom">Wisdom</Label>
                <Input type="text" name="wisdom" id="wisdom" />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Animal Handling
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Insight
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Medicine
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Perception
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Survival
                </Label>
              </FormGroup>
              <hr />
              <FormGroup>
                <Label for="charisma">Charisma</Label>
                <Input type="text" name="charisma" id="charisma" />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Deception
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Intimidation
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Performance
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Persuasion
                </Label>
              </FormGroup>
            </Form>
            <hr />
          </CardBody>
        </Card>
      </Col>
{/* HP/AC */}
      <Col lg="6">
        <Card>
        <CardBody>
          <Form>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="armor">Armor Class</Label>
                <Input type="text" name="armor" id="armor" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="initiviate">Initiative</Label>
                <Input type="text" name="initiative" id="initiviate" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="speed">Speed</Label>
                <Input type="text" name="speed" id="speed" />
              </FormGroup>
            </Col>
            </Row>  
            <FormGroup>
              <Label for="hitPoints">Hit Points</Label>
              <Input type="text" name="hitPoints" id="hitPoints" />
            </FormGroup>
            <FormGroup>
              <Label for="tempHitPoints">Temporary Hit Points</Label>
              <Input type="text" name="tempHitPoints" id="tempHitPoints" />
            </FormGroup>
            <Row>
              <Col md={6}>
              <FormGroup>
                <Label for="hitDice">Hit Dice</Label>
                <Input type="text" name="hitDice" id="hitDice" />
                <br/>
              </FormGroup>
              </Col>
              <Col md={6}>
                <Label for="deathSaves">Death Saves</Label>
                <br/>
                <FormGroup check inline>
                  {/* Successes */}
                  <Label check>
                    Successes
                    <Input type="checkbox" />
                  </Label>
                  <Label check>
                    <Input type="checkbox" />
                  </Label>
                  <Label check>
                    <Input type="checkbox" />
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  {/* Failures */}
                  <Label check>
                    Failures
                    <Input type="checkbox" />
                  </Label>
                  <Label check>
                    <Input type="checkbox" />
                  </Label>
                  <Label check>
                    <Input type="checkbox" />
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
