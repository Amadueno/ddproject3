import React, { useState, userState } from 'react'
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
  Media,
  Card,
  Container
} from 'reactstrap'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { render } from 'react-dom'
import 'react-toastify/dist/ReactToastify.css'
import backgroundD from '../../assets/backgroundD.png'

toast.configure()

const Home = () => {
  const [userState, setUserState] = useState({
    username: '',
    password: ''
  })

  const [newUserState, setNewUserState] = useState({
    rUsername: '',
    rPassword: ''
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
          localStorage.setItem('username', userState.username)
          localStorage.setItem('user', token)
          console.log(token)
          window.location.pathname = '../Character/Character.js'
          // window.location = '/index.html'
        } else {
          console.log('Wrong credential')
          toast.error('Login Failed, Please Try Again.', {
            autoClose: 4000,
            position: toast.POSITION.TOP_CENTER,
            pauseOnHover: true
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
        setNewUserState({ ...newUserState, rUsername: '', rPassword: '' })
        toast.success('Registration Successful, Please Login.', {
          className: "success-toast",
          autoClose: 4000,
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: true
        })
        console.log('hi!')
      })
      .catch(err => {
        console.error(err)
        toast.error('Registration Unsuccessful, Please Try Again.', {
          autoClose: 4000,
          position: toast.POSITION.TOP_CENTER,
          pauseOnHover: true
        })
      })
  }

  userState.handleUserLogout = event => {
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    localStorage.removeItem('class')
    localStorage.removeItem('background')
    localStorage.removeItem('race')
    localStorage.removeItem('faction')
    localStorage.removeItem('alignment')
    localStorage.removeItem('exp')
    localStorage.removeItem('strengthValue')
    localStorage.removeItem('dexterityValue')
    localStorage.removeItem('constitutionValue')
    localStorage.removeItem('intelligenceValue')
    localStorage.removeItem('wisdomValue')
    localStorage.removeItem('charismaValue')
    localStorage.removeItem('proficiency')
    localStorage.removeItem('inspiration')
    localStorage.removeItem('strength')
    localStorage.removeItem('athletics')
    localStorage.removeItem('dexterity')
    localStorage.removeItem('acrobatics')
    localStorage.removeItem('sleight_of_hand')
    localStorage.removeItem('stealth')
    localStorage.removeItem('constitution')
    localStorage.removeItem('intelligent')
    localStorage.removeItem('arcana')
    localStorage.removeItem('history')
    localStorage.removeItem('investigation')
    localStorage.removeItem('nature')
    localStorage.removeItem('religion')
    localStorage.removeItem('wisdom')
    localStorage.removeItem('animal_handling')
    localStorage.removeItem('insight')
    localStorage.removeItem('medicine')
    localStorage.removeItem('perception')
    localStorage.removeItem('other_pro_lang')
    localStorage.removeItem('survival')
    localStorage.removeItem('charisma')
    localStorage.removeItem('deception')
    localStorage.removeItem('intimidation')
    localStorage.removeItem('performance')
    localStorage.removeItem('persuasion')
    localStorage.removeItem('perceptionValue')
    localStorage.removeItem('armor_class')
    localStorage.removeItem('initiative')
    localStorage.removeItem('speed')
    localStorage.removeItem('maxHP')
    localStorage.removeItem('HP')
    localStorage.removeItem('temp_HP')
    localStorage.removeItem('total')
    localStorage.removeItem('hit_dice')
    localStorage.removeItem('successes')
    localStorage.removeItem('success1')
    localStorage.removeItem('success2')
    localStorage.removeItem('success3')
    localStorage.removeItem('failures')
    localStorage.removeItem('failure1')
    localStorage.removeItem('failure2')
    localStorage.removeItem('failure3')
    localStorage.removeItem('att_spell_name')
    localStorage.removeItem('att_spell_bonus')
    localStorage.removeItem('att_spell_type')
    localStorage.removeItem('atk_spell')
    localStorage.removeItem('CP')
    localStorage.removeItem('SP')
    localStorage.removeItem('EP')
    localStorage.removeItem('GP')
    localStorage.removeItem('PP')
    localStorage.removeItem('equipments')
    localStorage.removeItem('traits')
    localStorage.removeItem('ideals')
    localStorage.removeItem('bonds')
    localStorage.removeItem('flaws')
    localStorage.removeItem('feat_traits')
    window.location.pathname = './'
  }

  return (
    <>
      <div className="homePage">
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
                  type="password"
                  name='password'
                  value={userState.password}
                  onChange={userState.handleInputChange}
                />
              </FormGroup>
              <ButtonToggle className='diceButton' color='danger' onClick={userState.handleUserLogin}>Log In</ButtonToggle>
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
                  type="password"
                  name='rPassword'
                  value={newUserState.rPassword}
                  onChange={newUserState.handleNewInputChange}
                />
              </FormGroup>
              <ButtonToggle className='diceButton' color='danger' onClick={newUserState.handleCreateUser}>Register</ButtonToggle>
            </Form>
          </Col>
        </Row>
        <Media className= "dragonB">
          <Media src={backgroundD}></Media>
        </Media>
      </div>
    </>
  )
}

export default Home
