import React, { useState } from 'react'
import Home from './pages/Home'
import User from './pages/User'
import Dice from './pages/Dice'
import Notes from './pages/Notes'
import Saved from './pages/Saved'
import Character from './pages/Character'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import './app.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Router>
      <div>
        <Navbar color='danger' light expand='md'>
          <NavbarBrand href='/'>Dungeon Sheets</NavbarBrand>
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
              {/* <NavItem>
                <NavLink href='/saved/'>Saved</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/user" component={User} /> */}
          <Route path="/character" component={Character} />
          <Route path="/dice" component={Dice} />
          <Route path="/notes" component={Notes} />
          {/* <Route path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
