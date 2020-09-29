import React, { useState } from 'react'
import { Button, Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap'
import Moment from 'react-moment'
import axios from 'axios'
// import Component from '../../components'
// class Notes extends Component {
const Notes = () => {
  {
    const [noteState, setNoteState] = useState({
      input: '',
      notes: []
    })
    noteState.handleInputChange = event => {
      setNoteState({ ...noteState, [event.target.name]: localStorage.getItem(`${event.target.name}`) })
      setNoteState({ ...noteState, [event.target.name]: event.target.value })
      console.log('hi')
    }
    noteState.handleCreateNote = event => {
      event.preventDefault()
      axios.post('/api/notes', {
        input: noteState.input
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`
        }
      })
        .then(res => {
          // setNoteState({
          //   ...noteState,
          //   input: ' ',
          // })
          localStorage.setItem('input', noteState.input)
        })
        .catch(err => {
          console.error(err)
        })
    }
    return (
      <div >
        <Container
        style={{color: "whitesmoke"}}>
          <br/>
          <h3>Campaign Notes</h3>
          {/* <Button onClick={noteState.handleCreateNote} color="danger">📝</Button> */}
        </Container>
        <Container >
          <Row>
            <Col >
              <Card >
                {/* <CardImg width="auto" src="assets/parchment.jpg" alt="parchment"/> */}
                <CardImgOverlay>
                    {/* <CardTitle>Note Title</CardTitle> */}
                  <textarea className="noteCard" type="input"
                      name="input"
                      defaultValue={localStorage.getItem('input')}
                      onChange={noteState.handleInputChange}
                      style={{width: '100%', height: '23rem'}}>
                    </textarea>
                    <small className="text-muted">
                      <Moment />
                    </small>
                    <Button onClick={noteState.handleCreateNote} color="danger">log note 💾</Button>
                    <Button color="danger">❌</Button>
                  </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Notes