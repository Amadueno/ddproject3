import React, { useState } from 'react'
import { Button, Card, CardTitle, CardText, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap'
import Moment from 'react-moment'
import axios from 'axios'
// import Component from '../../components'
// class Notes extends Component {
const Notes = () => {
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
        // axios.get('/api/notes')
        //   .then(({ data }) => {
        // data.forEach(note => {
        //   componentDidMount: function() {
        //     $('.delete').append("<h2>append to div in parent?</h2>");
        //   },
        // let noteElem = React.createElement('li')
        // noteElem.className = 'delete'
        // noteElem.innerHTML = `<button class="delete" data-id="${note.id}">X</button>`
        // let deleteAction = React.findDOMNode()
        // })
        // })
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
  noteState.handleRemoveNote = event => {
    console.log(event.target.dataset)
    localStorage.setItem('input', '')
    window.location.pathname = '../Notes/Notes.js'
    // axios.get('/api/notes', {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('user')}`
    //   }
    // })
    //   .then(res => console.log(res.data))
    //   // axios.delete(`/api/notes/${event.target.dataset.id}`)
    //   //   .then(() => {
    //   //     event.target.parentNode.remove()
    //   //     localStorage.removeItem('input')
    //   //   })
    //   .catch(err => console.error(err))
  }

  return (
    <div>
      <Container>
        <h3>Campaign Notes</h3>
        {/* <Button onClick={noteState.handleCreateNote} color="danger">📝</Button> */}
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImgOverlay>
                {/* <CardTitle>Note Title</CardTitle> */}
                <textarea
                  type='input'
                  name='input'
                  defaultValue={localStorage.getItem('input')}
                  onChange={noteState.handleInputChange}
                />
                <small className='text-muted'>
                  <Moment />
                </small>
                <Button onClick={noteState.handleCreateNote} color='danger'>log note 💾</Button>
                <Button color='danger' onClick={noteState.handleRemoveNote}>❌</Button>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Notes
