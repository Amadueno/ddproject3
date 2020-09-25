import React, {useState} from 'react'
import DiceRoller from 'dice-roller-dnd'
import {
  Row, 
  Card,
  CardBody,
  Button
} from 'reactstrap'

const dice = new DiceRoller()
    console.log(dice.d20())

// { dice.d20().rolls }
const Dice = () => {
  const [diceState, setDiceState] = useState({
    roll: ' '
  })

  diceState.handleD4 = event => {
    let newRoll = dice.d4().rolls[0]
    setDiceState({ ...diceState,roll: newRoll})
    console.log(dice.d4().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD6 = event => {
    let newRoll = dice.d6().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d6().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD8 = event => {
    let newRoll = dice.d8().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d8().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD10 = event => {
    let newRoll = dice.d10().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d10().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  diceState.handleD20 = event => {
    let newRoll = dice.d20().rolls[0]
    setDiceState({ ...diceState, roll: newRoll })
    console.log(dice.d20().rolls[0])
    console.log(diceState)
    console.log(event.target)
  }

  return (
    <>
      <Row>
        <Card>
          <CardBody>
            <h2>Select Dice Type:</h2>
            <hr/>
            <Button color="danger" onClick={diceState.handleD4}>d4</Button>
            <Button color="danger" onClick={diceState.handleD6}>d6</Button>
            <Button color="danger" onClick={diceState.handleD8}>d8</Button>
            <Button color="danger" onClick={diceState.handleD10}>d10</Button>
            <Button color="danger" onClick={diceState.handleD20}>d20</Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <hr />
            <h5>Roll Outcome: {diceState.roll}</h5>
          </CardBody>
        </Card>
      </Row>
    </>
  )
}

export default Dice