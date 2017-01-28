import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Image } from 'react-bootstrap'

import './Sponsor.css'
import VDGLogo from '../images/VDG_logo.png'
import HomeLogo from '../images/Home_logo.jpg'
import WaterforeveryoneLogo from '../images/waterforeveryone_logo.png'


const Sponsor = () => (
  <Row>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div className='center-top-col'><a href='http://www.vietdantravel.com/'><Image src={VDGLogo}></Image></a></div>
    </Col>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div className='center-top-col'><a href='http://m.homehanoirestaurant.com/'><Image src={HomeLogo}></Image></a></div>
    </Col>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div className='center-top-col'><a href='https://www.waterforeveryone.org/en/'><Image src={WaterforeveryoneLogo}></Image></a></div>
    </Col>
  </Row>
)
export default Sponsor
