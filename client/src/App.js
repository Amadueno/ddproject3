import React from 'react'
import Home from './pages/Home'
import User from './pages/User'
import Dice from './pages/Dice'
import Notes from './pages/Notes'
import Character from './pages/Character'
// import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/user'>User</Link>
          <Link to='/dice'>Dice</Link>
          <Link to='/character'>Character</Link>
          <Link to ='/notes'>Notes</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route path='/dice' component={Dice} />
          <Route path='/character' component={Character} />
          <Route path='/notes' component={Notes} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
