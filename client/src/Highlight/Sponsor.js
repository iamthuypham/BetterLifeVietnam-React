import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './Sponsor.css'
import VDGLogo from '../images/VDG_logo.png'
import HomeLogo from '../images/Home_logo.jpg'
import WaterforeveryoneLogo from '../images/waterforeveryone_logo.png'

const Sponsor = () => (
  <Row>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div><a href='http://www.vietdantravel.com/' target="_blank"><Image src={VDGLogo}></Image></a></div>
    </Col>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div style={{textAlign: 'center'}}><a href='https://www.waterforeveryone.org/en' target="_blank"><Image src={WaterforeveryoneLogo}></Image></a></div>
    </Col>
    <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
      <div><a href='http://m.homehanoirestaurant.com/' target="_blank"><Image src={HomeLogo}></Image></a></div>
      <div className='sponsorNote'><p style={{fontSize: '10px', color:'#777', textAlign:'center'}}>Home Hanoi Restaurant will donate 10 percent of dinner service proceeds to benefit children of Vietnam through the Better Life Vietnam organization. Please inform the restaurant at check in.</p></div>
    </Col>
  </Row>
)
export default Sponsor
