import React, { useState } from 'react'
import DiceRoller from 'dice-roller-dnd'
import {
  Row,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay
} from 'reactstrap'

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

  return (
    <div className="dice">
      <Row>
        <Card className="diceCard"> 
          <CardBody>
            <h2>Select Dice Type:</h2>
            <hr />
            <Button color='danger' onClick={diceState.handleD4}>d4</Button>
            <Button color='danger' onClick={diceState.handleD6}>d6</Button>
            <Button color='danger' onClick={diceState.handleD8}>d8</Button>
            <Button color='danger' onClick={diceState.handleD10}>d10</Button>
            <Button color='danger' onClick={diceState.handleD20}>d20</Button>
          </CardBody>
        </Card>
        <Card className="diceCard">
          <CardImg width="100%" src="/assets/d201.jpg" alt="d20" />
          <CardImgOverlay>
            <CardTitle>Roll Outcome:</CardTitle>
            <CardText> {diceState.roll}</CardText>
          </CardImgOverlay>
        </Card>

        {/* <Card className="diceCard d20">
          <CardBody>
            <hr />
            <h5 >Roll Outcome: {diceState.roll}</h5>
          </CardBody>
        </Card> */}
      </Row>
    </div>
  )
}

export default Dice
