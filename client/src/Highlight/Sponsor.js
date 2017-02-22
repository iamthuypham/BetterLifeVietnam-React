import React from 'react'
import { Row, Col, Image, Tooltip, OverlayTrigger } from 'react-bootstrap'

import './Sponsor.css'
import VDGLogo from '../images/VDG_logo.png'
import HomeLogo from '../images/Home_logo.jpg'
import WaterforeveryoneLogo from '../images/waterforeveryone_logo.png'

const tooltip = (
  <Tooltip id="tooltip">In partnership with Better Life Vietnam, Home Hanoi Restaurant will donate 10% of your bill to benefit the children of Vietnam. Please mention Better Life Vietnam to the host during check-in. </Tooltip>
);

class Sponsor extends React.Component {
  render () {
    return (
      <Row>
        <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
          <div><a href='http://www.vietdantravel.com/' target="_blank"><Image src={VDGLogo}></Image></a></div>
        </Col>
        <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
          <div style={{textAlign: 'center'}}><a href='https://www.waterforeveryone.org/en' target="_blank"><Image src={WaterforeveryoneLogo}></Image></a></div>
        </Col>
        <Col xs={12} sm={4} className='sponsorImageCol center-top-col'>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <div><a href='http://m.homehanoirestaurant.com/' target="_blank"><Image src={HomeLogo}></Image></a></div>
          </OverlayTrigger>
        </Col>
      </Row>
    )
  }
}
export default Sponsor
