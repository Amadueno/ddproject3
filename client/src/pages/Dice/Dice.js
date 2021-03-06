import React, { useState, userState } from 'react'
import DiceRoller from 'dice-roller-dnd'
import {
  Row,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay, Container
} from 'reactstrap'
import d20 from '../../assets/d20.png'

const dice = new DiceRoller()
console.log(dice.d20())

// { dice.d20().rolls }
const Dice = () => {
  const [diceState, setDiceState] = useState({
    roll: ' '
  })

  diceState.handleD4 = event => {
    const newRoll = dice.d4().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d4().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD6 = event => {
    const newRoll = dice.d6().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d6().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD8 = event => {
    const newRoll = dice.d8().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d8().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD10 = event => {
    const newRoll = dice.d10().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d10().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD20 = event => {
    const newRoll = dice.d20().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d20().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }
  const [userState, setUserState] = useState({
    username: localStorage.getItem('username'),
    password: ''
  })
  userState.handleUserLogout = event => {
    localStorage.removeItem('username')
    window.location.pathname = './'
  }

  return (
    <div>
        <Card className="diceCard"> 
          <CardBody>
            <h2>Select Dice Type:</h2>
            <hr />
            <Button className="diceButton" color='danger' onClick={diceState.handleD4}>d4</Button>
            <Button className="diceButton"color='danger' onClick={diceState.handleD6}>d6</Button>
            <Button className="diceButton"color='danger' onClick={diceState.handleD8}>d8</Button>
            <Button className="diceButton"color='danger' onClick={diceState.handleD10}>d10</Button>
            <Button className="diceButton"color='danger' onClick={diceState.handleD20}>d20</Button>
          </CardBody>
        </Card>
        {/* <div className="container">
            <img src={d20} style={{width: '100%'}}/>
            <h2 className="center" id="diceResult">{diceState.roll} </h2>
        </div> */}
        <div className="container">
        <img src={d20} style={{ width: '100%' }} />
          <div className="centered">{diceState.roll}</div>
        </div>  
    </div>
  )
}
// ../../assets / d201.jpg
export default Dice
