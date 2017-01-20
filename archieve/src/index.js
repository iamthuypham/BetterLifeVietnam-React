import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NavBar from './Navigation/NavBar'
import Landing from './scenes/Landing'
import About from './scenes/About'
import OurTeam from './scenes/OurTeam'
import BookLibrary from './scenes/BookLibrary'
import BLVScholarship from './scenes/BLVScholarship'
import ToursTravelServices from './scenes/ToursTravelServices'
import Voluntourism from './scenes/Voluntourism'
import StudyTours from './scenes/StudyTours'
import OurDonors from './scenes/OurDonors'
import Contact from './scenes/Contact'

import './index.css'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={NavBar}>
      <IndexRoute component={Landing} />
      <Route path='/about' component={About} />
      <Route path='/our-team' component={OurTeam} />
      <Route path='/what-we-do'>
        <Route path='/book-library' component={BookLibrary} />
        <Route path='/blv-scholarship' component={BLVScholarship} />
      </Route>
      <Route path='/tours-for-books'>
        <Route path='/tours-travel-services' component={ToursTravelServices} />
        <Route path='/voluntourism' component={Voluntourism} />
        <Route path='/study-tours' component={StudyTours} />
      </Route>
      <Route path='/our-donors' component={OurDonors} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
