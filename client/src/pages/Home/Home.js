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
        console.log(token)
        if (token) {
          localStorage.setItem('user', token)
          console.log(token)
          window.location.pathname = '../User/User.js'
          // window.location = '/index.html'
        } else {
          console.log('Wrong credential')
        }
        // localStorage.setItem('user', '')
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
     
    </>
  )
}

export default Home

