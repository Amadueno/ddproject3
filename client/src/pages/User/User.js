import React, { useState } from 'react'


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

    CharacterState.handleInputChange = event => {
        setCharacterState({ ...characterState, [event.target.name]: event.target.value })
        console.log('hi')

    }
    
    return (
        <>

            <Form>
                <label htmlFor='name'>name</label>
                <label htmlFor='class'>class</label>
                <label htmlFor='background'>background</label>
                <label htmlFor='race'>race</label>
                <label htmlFor='faction'>faction</label>
                <label htmlFor='alignment'>alignment</label>
                <label htmlFor='exp'>exp</label>


            </Form>
        </>




    )
    
}   
export default Character 