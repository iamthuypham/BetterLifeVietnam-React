import React from 'react'
import { Image, Button } from 'react-bootstrap'
import Highlight from '../Highlight/Highlight'
import FreeBookLibraryPic from '../images/FreeBookLibrary.jpg'
import './Landing.css'

const Landing = () => (
  <div className='container-fluid'>
    <div className='center-top-col cover-container'>
      <div className='cover-title'>
        <h1>Working to improve education conditions for underprivileged children and youth in Vietnam</h1>
        <Button>Donate Now</Button>
      </div>
      <Image className='cover-pic' src={FreeBookLibraryPic} />
    </div>
    <Highlight />
  </div>
)

module.exports = Landing
