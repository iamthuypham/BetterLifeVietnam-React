import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NavBar from './Navigation/NavBar'
import Landing from './scenes/Landing'
import About from './scenes/About'
import OurTeam from './scenes/OurTeam'
import FreeBookLibrary from './scenes/FreeBookLibrary'
import Scholarship from './scenes/Scholarship'
import JobAssistance from './scenes/JobAssistance'
import ToursTravelServices from './scenes/ToursTravelServices'
import Voluntourism from './scenes/Voluntourism'
import StudyTours from './scenes/StudyTours'
import Contact from './scenes/Contact'

import './index.css'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={NavBar}>
      <IndexRoute component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/our-team' component={OurTeam} />
      <Route path='/what-we-do'>
        <Route path='free-book-library' component={FreeBookLibrary} />
        <Route path='scholarship' component={Scholarship} />
        <Route path='job-assistance' component={JobAssistance} />
      </Route>
      <Route path='/responsible-tourism'>
        <Route path='/tours-travel-services' component={ToursTravelServices} />
        <Route path='/voluntourism' component={Voluntourism} />
        <Route path='/study-tours' component={StudyTours} />
      </Route>
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
