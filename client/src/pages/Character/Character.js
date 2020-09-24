import React from 'react'
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const Character = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="CharacterName" sm={2}>Character Name</Label>
        <Col sm={10}>
          <Input type="characterName" name="characterName" id="CharacterName" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="PlayerName" sm={2}>Player</Label>
        <Col sm={10}>
          <Input type="player" name="player" id="PlayerName" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Class" sm={2}>Class</Label>
        <Col sm={10}>
          <Input type="class" name="class" id="Class" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Race" sm={2}>Race</Label>
        <Col sm={10}>
          <Input type="race" name="race" id="Race" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="Exp" sm={2}>Exp</Label>
        <Col sm={10}>
          <Input type="exp" name="exp" id="Exp" />
        </Col>
      </FormGroup>
      <Form>
        <hr />
        <Col md={2}>
          <FormGroup>
            <Label for="strength">Strength</Label>
            <Input type="text" name="strength" id="strength" />
          </FormGroup>
        </Col>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Athletics
        </Label>
        </FormGroup>
        <hr />
        <Col md={2}>
          <FormGroup>
            <Label for="dexterity">Dexterity</Label>
            <Input type="text" name="dexterity" id="dexterity" />
          </FormGroup>
        </Col>
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
        <Col md={2}>
          <FormGroup>
            <Label for="constitution">Constitution</Label>
            <Input type="text" name="constitution" id="constitution" />
          </FormGroup>
        </Col>
        <hr />
        <Col md={2}>
          <FormGroup>
            <Label for="intelligence">Intelligence</Label>
            <Input type="text" name="intelligence" id="intelligence" />
          </FormGroup>
        </Col>
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
        <hr/>
        <Col md={2}>
          <FormGroup>
            <Label for="wisdom">Wisdom</Label>
            <Input type="text" name="wisdom" id="wisdom" />
          </FormGroup>
        </Col>
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
        <Col md={2}>
          <FormGroup>
            <Label for="charisma">Charisma</Label>
            <Input type="text" name="charisma" id="charisma" />
          </FormGroup>
        </Col>
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
    </Form>
  )
}

export default Character
