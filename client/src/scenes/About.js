import React from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'

import About1 from '../images/About1.jpg'

const About = () => (
  <div className='container'>
    <div>
      <h1 className='addMargin'>Who We Are</h1>
      <div className='center-top-col'>
        <p>Founded in 2010 by <strong>Ms. Nguyen Minh Thinh</strong> of Hanoi and <strong>the Walter family</strong> of the town of Weiterstadt (near Frankfurt, Germany), <strong>Better Life Vietnam (BLV)</strong> is a non-profit organization that works to improve education conditions for underprivileged children and youth in Vietnam. Thinh and the Walter family realize there is a great need in these communities and share a passion to provide a brighter future for the youth of Vietnam. With the vision to help reduce the burden for the poor families of Vietnam, Better Life Vietnam has dedicated its efforts to encourage knowledge and support children in getting the education they deserve.</p>
        <p>Better Life Vietnam now includes a growing network of individuals in Vietnam, Europe, and the United States working for the same goal: <strong>supporting lives to excel</strong>.</p>
      </div>
      <Image alt='About BLV' src={About1} style={{ width: '100%', margin: '3% 0'}} />

    </div>
  </div>
)

module.exports = About
