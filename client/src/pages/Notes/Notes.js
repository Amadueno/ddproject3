import React, { useState } from 'react'
import { Button, Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap'
import Moment from 'react-moment'

// import Component from '../../components'

// class Notes extends Component {
const Notes = () => {
{
  const [noteState, setNoteState] = useState({
    input:'',
    notes:[]

 })

noteState.handleInputChange = event => {
    setNoteState({ ...noteState, [event.target.name]: event.target.value })
    console.log('hi')
}
  return (
    <div>
      <Container>
        <h3>Campaign Notes</h3>
        <Button color="danger">✏️</Button>
      </Container>
      <Container>
        <Row>
          <Col >
            <Card>
              {/* <CardImg width="100%" src="/assets/318x270.svg" alt="parchment" /> */}
              <CardImgOverlay>
                <CardTitle>Note Title</CardTitle>
                <input type="input"
                            name="input"
                            value={noteState.input}
                            onChange={noteState.handleInputChange} />
                <CardText>
                  <small className="text-muted">
                    <Moment />
                  </small>
                </CardText>
                <Button color="danger">❌</Button>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )}
}

export default Notes
