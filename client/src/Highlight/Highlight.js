import React from 'react'
import './Highlight.css'
import { Col, Image, Button } from 'react-bootstrap'
import TFB from '../images/TFB-logo.png'

const Highlight = () => (
  <div className='TFB-container' style={{display:'inline-block'}}>
    <Col className='TFB-col' xs={12} sm={6}>
      <h3>Interested in Volunteering?</h3>
      <div className='TFB-p'>
        <p>Voluntourism Programs - In partnership with Better Life Vietnam and VietDan, tourists can engage in community work and gain an immersive look into Vietnamese culture in exchange.</p>
        <p>Opportunities may include: teaching English classes for rural children, visiting handicapped children, and more</p>
      </div>
      <Button>Learn More</Button>
    </Col>
    <Col className='TFB-col' xs={12} sm={6}>
      <h3>A Proud Supporter of Better Life Vietnam</h3>
      <Image className='TFB-pic' alt='Tour For Book' src={TFB}/>
    </Col>
  </div>
)
export default Highlight
