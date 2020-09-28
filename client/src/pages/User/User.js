import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import axios from 'axios'

const randClass = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
const randRace = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'tiefling']
const randBackground = ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'outlander', 'noble', 'sage', 'sailor', 'solider', 'urchin']
const randAlignment = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'neutral', 'chaotic neutral', 'lawful evil', ' neutral evil', 'chaotic evil']
const randFaction = ['Harpers', 'Order of the Gauntlet', 'Emerald Enclave', 'Lords Alliance', 'Zhentarim']

var Generate = {

}

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

        axios.post('/api/characters', {
            name: characterState.name,
            class: characterState.class,
            background: characterState.background,
            race: characterState.race,
            faction: characterState.faction,
            alignment: characterState.alignment,
            exp: characterState.exp
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
              exp: ' '
            })
            localStorage.setItem('name',characterState.name)
            localStorage.setItem('class',characterState.class)
            localStorage.setItem('background',characterState.background)
            localStorage.setItem('race',characterState.race)
            localStorage.setItem('faction',characterState.faction)
            localStorage.setItem('alignment',characterState.alignment)
            localStorage.setItem('exp',characterState.exp)
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
                    <Label for="name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <input type="name"
                            name="name"
                            value={characterState.name}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="class" sm={2}>Class</Label>
                    <Col sm={10}>
                        <input type="class"
                            name="class"
                            value={characterState.class}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="background" sm={2}>Background</Label>
                    <Col sm={10}>
                        <input type="background"
                            name="background"
                            value={characterState.background}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="race" sm={2}>Race</Label>
                    <Col sm={10}>
                        <input type="race"
                            name="race"
                            value={characterState.race}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="faction" sm={2}>Faction</Label>
                    <Col sm={10}>
                        <input type="faction"
                            name="faction"
                            value={characterState.faction}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="alignment" sm={2}>Alignment</Label>
                    <Col sm={10}>
                        <input type="alignment"
                            name="alignment"
                            value={characterState.alignment}
                            onChange={characterState.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exp" sm={2}>Exp</Label>
                    <Col sm={10}>
                        <input type="exp"
                            name="exp"
                            value={characterState.exp}
                            onChange={characterState.handleInputChange} />
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
