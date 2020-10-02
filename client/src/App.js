import React, { useState } from 'react'
import Home from './pages/Home'
import User from './pages/User'
import Dice from './pages/Dice'
import Notes from './pages/Notes'
import Saved from './pages/Saved'
import Character from './pages/Character'
import img from './assets/dragon5.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import './app.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [userState, setUserState] = useState({
    username: localStorage.getItem('username'),
    password: ''
  })

  userState.handleUserLogout = event => {
    localStorage.removeItem('username')
    localStorage.removeItem('user')
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
    <Router>
      <div>
        <Navbar className="gradient" color='danger' dark expand='md' sticky="top">
            <NavbarBrand>
              <img src= {img} width="55" height="47" className="d-inline-block align-top" style={{border: "none"}}/>{' '}
              Dungeon Sheets
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              {/* <NavItem>
                <NavLink href='/user/'>User</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href='/character/'>Character</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/dice/'>Dice</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/notes/'>Notes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/saved/'>Saved</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button className="diceButton" onClick={userState.handleUserLogout}>Log Out</Button>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/user" component={User} /> */}
          <Route path="/character" component={Character} />
          <Route path="/dice" component={Dice} />
          <Route path="/notes" component={Notes} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
      <div>
        <Navbar className="gradient" color='danger' dark expand='md' fixed="bottom">
          <img src={img} width="35" height="27" className="d-inline-block align-top" style={{ border: "none" }} />
          <p className="bot">Dungeon Sheets© 2020</p>
          <p > <a className="bot2"href="https://github.com/Amadueno/ddproject3" target="_blank">GitHub</a></p>
        </Navbar>
      </div>
    </Router>
  )
}

export default App
