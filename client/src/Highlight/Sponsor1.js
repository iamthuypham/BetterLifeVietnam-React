import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './Sponsor1.css'
import VDGLogo from '../images/VDG_logo.png'
import HomeLogo from '../images/Home_logo.jpg'
import WaterforeveryoneLogo from '../images/waterforeveryone_logo.png'

class Sponsor1 extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={12} sm={3} className='sponsorImageCol1 center-top-col'>
            <div><a href='http://www.vietdantravel.com/' target="_blank"><Image src={HomeLogo}></Image></a></div>
          </Col>
          <Col xs={12} sm={9} className='sponsorTextCol' >
            <div>
              <p>Home Hanoi Restaurant</p>
              <p>In partnership with Better Life Vietnam, Home Hanoi Restaurant will donate 9% of your bill to benefit the children of Vietnam. <strong>Please mention Better Life Vietnam to the host during check-in.</strong></p>
            </div>
          </Col>
        </Row>  
        <Row>
          <Col xs={12} sm={3} className='sponsorImageCol1 center-top-col'>
            <div><a href='https://www.waterforeveryone.org/en' target="_blank"><Image src={WaterforeveryoneLogo}></Image></a></div>
          </Col>
          <Col xs={12} sm={9} className='sponsorTextCol'>
            <div>
              <p>Water For Everyone</p>
            </div>
          </Col>
        </Row>    
        <Row>
          <Col xs={12} sm={3} className='sponsorImageCol1 center-top-col'>
            <div className='center-top-col'><a href='http://m.homehanoirestaurant.com/' target="_blank"><Image src={VDGLogo}></Image></a></div>
          </Col>
          <Col xs={12} sm={9} className='sponsorTextCol'>
            <div>
              <p>VietDan Travel</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Sponsor1
