import React from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'

import About1 from '../images/About1.jpg'

const About = () => (
  <div className='container'>
    <div>
      <h1>Who We Are</h1>
      <div className='center-top-col'>
        <h4><strong>Better Life Vietnam</strong> (BLV) is a non-profit organization that works to improve education conditions for underprivileged children and youth in Vietnam. Realizing there is so much need in communities to meet their most basic needs, <strong>Better Life Vietnam</strong> was founded in 2010 by <Link className='routeLink' to='/our-team'>Ms. Nguyen Minh Thinh</Link> of Hanoi, and <Link className='routeLink' to='/our-team'>the Walter family</Link> of the town of Weiterstadt (near Frankfurt, Germany) who shared the passion to bring a brighter future to the youth throughout the country. With the vision to help reduce the burden for the poor families of Vietnam, <strong>Better Life Vietnam</strong> has dedicated their efforts to encourage knowledge and support children in getting the education they deserve.</h4>
        <h4><strong>Better Life Vietnam</strong> now includes a growing network of individuals in Vietnam, Europe, and the United States working for the same goal: supporting lives to excel.</h4>
      </div>
      <Image alt='About BLV' src={About1} style={{ width: '100%', margin: '3% 0'}} />
      
    </div>
  </div>
)

module.exports = About
