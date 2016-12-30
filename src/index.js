import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import NavBar from './Navigation/NavBar'
import Landing from './scenes/Landing'
import About from './scenes/About'
import OurTeam from './scenes/OurTeam'
import WhatWeDo from './scenes/WhatWeDo'
import FreeBookLibrary from './scenes/FreeBookLibrary'
import Scholarship from './scenes/Scholarship'
import TourForBook from './scenes/TourForBook'
import TourInfo from './scenes/TourInfo'
import Contact from './scenes/Contact'

import './index.css'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={NavBar}>
      <Route path='/landing' component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/our-team' component={OurTeam} />
      <Route path='/what-we-do' component={WhatWeDo} />
      <Route path='/free-book-library' component={FreeBookLibrary} />
      <Route path='/scholarship' component={Scholarship} />
      <Route path='/tour-for-book' component={TourForBook} />
      <Route path='/tour-info' component={TourInfo} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
