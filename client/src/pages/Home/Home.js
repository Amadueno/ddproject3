import React, { useState } from 'react'
import API from '../../utils/API'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonToggle,
  Row,
  Container
} from 'reactstrap'
import axios from 'axios'
const Home = () => {
  const [userState, setUserState] = useState({
    username: ' ',
    password: ' '
  })

  const [newUserState, setNewUserState] = useState({
    rUsername: ' ',
    rPassword: ' '
  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
    console.log(event.target.value)
  }

  userState.handleUserLogin = event => {
    event.preventDefault()
    console.log(event.target)
    axios.post('/api/users/login', {
      username: userState.username,
      password: userState.password
    })
      .then(({ data: token }) => {
        if (token) {
          localStorage.setItem('user', token)
          console.log(token)
          window.location.pathname = './User.js'
          // window.location = '/index.html'
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  newUserState.handleNewInputChange = event => {
    setNewUserState({ ...newUserState, [event.target.name]: event.target.value })
    console.log(newUserState)
  }

  newUserState.handleCreateUser = event => {
    event.preventDefault()
    console.log(event.target)
    axios.post('/api/users/register', {
      username: newUserState.rUsername,
      password: newUserState.rPassword
    })
      .then(res => {
        setNewUserState({ ...newUserState, rUsername: ' ', rPassword: ' ' })
        console.log('hi!')
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div>
        <Row>
          <Col xs='6'>
            <Form>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input
                  type='text'
                  name='username'
                  value={userState.username}
                  onChange={userState.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input
                  type='text'
                  name='password'
                  value={userState.password}
                  onChange={userState.handleInputChange}
                />
              </FormGroup>
              <ButtonToggle color='danger' onClick={userState.handleUserLogin}>Log In</ButtonToggle>
            </Form>
          </Col>
          <Col xs='6'>
            <Form>
              <FormGroup>
                <Label for='rUsername'>Username</Label>
                <Input
                  type='text'
                  name='rUsername'
                  value={newUserState.rUsername}
                  onChange={newUserState.handleNewInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='rPassword'>Password</Label>
                <Input
                  type='text'
                  name='rPassword'
                  value={newUserState.rPassword}
                  onChange={newUserState.handleNewInputChange}
                />
              </FormGroup>
              <ButtonToggle onClick={newUserState.handleCreateUser}>Register</ButtonToggle>
            </Form>
          </Col>
        </Row>
      </div>
      {/* <h1>Search for Movies & TV Shows</h1>
      <form>
        <p>
          <label htmlFor='search'>search</label>
          <input
            type='text'
            name='search'
            value={userState.search}
            onChange={userState.handleInputChange}
          />
        </p>
        <p>
          <button onClick={userState.handleSearchOMDB}>Search OMDB</button>
        </p>
      </form>
      {
        userState.user.length > 0 ? (
          userState.user.map(user => (
            <div key={user.imdbID}>
              <img src={user.poster} alt={user.title} />
              <h3>{user.title}</h3>
              <h4>Type: {user.type}</h4>
              <h4>Year: {user.year}</h4>
              <h5>imdbID: {user.imdbID}</h5>
              <button onClick={() => userState.handleSaveuser(user.imdbID)}>Save</button>
            </div>
          ))
        ) : null
      } */}
    </>
  )
}

export default Home

// import React, { useState } from 'react'

// import API from '../../utils/API'

// import {
//   ButtonToggle,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
//   Row,
//   Col,
//   Container
// } from 'reactstrap'

// const Home = (props) => {
//   const [userState, setUserState] = useState({
//     name: ' ',
//     password: ' ',
//     users: []
//   })
//   userState.handleInputChange = event => {
//     setUserState({ ...userState, [event.target.name]: event.target.value })
//     console.log('hi')
//   }
//   userState.handleCreateUser = event => {
//     event.preventDefault()
//     axios.post('/api/users/register', {
//       username: document.getElementById('rUsername').value,
//       password: document.getElementById('rPassword').value
//     })
//       .then(() => {
//         Toastify({
//           text: 'Registered! Please Sign In!',
//           duration: 3000
//         }).showToast()
//         document.getElementById('rUsername').value = ''
//         document.getElementById('rPassword').value = ''
//       })
//       .catch(err => {
//         console.error(err)
//         Toastify({
//           text: 'Woops! Something went wrong. Try again.',
//           backgroundColor: 'red',
//           duration: 3000
//         }).showToast()
//       })
//     // axios.post
//     // send the req.body=characterState
//   }
//   return (
//     <>

{ /* </ > */ }
//     </>
//   )
// }

// export default Home
