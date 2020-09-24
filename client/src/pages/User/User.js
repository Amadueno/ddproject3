import React, { useState } from 'react'
import { Col,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
        event.preventDefault ()
        // axios.post
        // send the req.body=characterState

    }
    
    return (
        <>
          <Form>
      <FormGroup row>
        <Label for="name" sm={2}>Name</Label>
        <Col sm={10}>
         <input type="name"
         name="name"
         value={characterState.name}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="class" sm={2}>Class</Label>
        <Col sm={10}>
        <input type="class"
         name="class"
         value={characterState.class}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="race" sm={2}>Race</Label>
        <Col sm={10}>
        <input type="race"
         name="race"
         value={characterState.race}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="faction" sm={2}>Faction</Label>
        <Col sm={10}>
        <input type="faction"
         name="faction"
         value={characterState.faction}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="alignment" sm={2}>Alignment</Label>
        <Col sm={10}>
        <input type="alignment"
         name="alignment"
         value={characterState.alignment}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exp" sm={2}>Exp</Label>
        <Col sm={10}>
        <input type="exp"
         name="exp"
         value={characterState.exp}
         onChange={characterState.handleInputChange}/>
        </Col>
      </FormGroup>
      
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={characterState.handleCreateCharacter}>Create Character</Button>
        </Col>
      
    </Form>
  

           
        </>




    )
    
}   
export default Character 
