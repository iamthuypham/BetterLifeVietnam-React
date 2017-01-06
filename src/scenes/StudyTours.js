import React from 'react'
import { Link } from 'react-router'

const About = () => (
  <div className='container'>
    <div>
      <h1>Study Tours</h1>
      <div className='center-top-col'>
        <h4>Offers students and groups the opportunity to learn first-hand from local businesses, NGOs and education institutions through <strong>a fun and vital experience</strong>. The program will be designed to <strong>your time and interests</strong>. Feel free to <Link className='routeLink' to='/contact'>get in touch</Link> with your inquiries and we will together build up the program that suit your needs.</h4>
      </div>
    </div>
  </div>
)

module.exports = About
