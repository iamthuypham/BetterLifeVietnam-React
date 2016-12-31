import React from 'react'
import { Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import CompModal from '../Modal/compModal'
import NorthModal from '../Modal/northModal'
import SouthModal from '../Modal/southModal'
import CentralModal from '../Modal/centralModal'
import CustomModal from '../Modal/customModal'
import '../scenes/TourForBook.css'

import CompModalThumb from '../images/compModalThumb.jpg'
import NorthModalThumb from '../images/northModalThumb.jpg'
import SouthModalThumb from '../images/southModalThumb.jpg'
import CentralModalThumb from '../images/centralModalThumb.jpg'
import CustomModalThumb from '../images/customModalThumb.png'

import CompBrochure from '../images/compBrochure.pdf'
import NorthBrochure from '../images/northBrochure.pdf'
import SouthBrochure from '../images/southBrochure.pdf'
import CentralBrochure from '../images/centralBrochure.pdf'

const TourForBook = () => (
  <div className='container'>
    <div className='center-top-col' style={{ margin: '3% 0'}}>
      <h4>Do you want to visit Vietnam and are you looking for a reliable Tour Agency to ease your trip? Why not choose Tours for Books for your bookings. It will make your trip to Vietnam even more meaningful.</h4>
		  <h4><span style={{color:'#00ba5d'}}>Better Life Vietnam</span> has teamed up with <span style={{color:'#00ba5d'}}>VietDan Travel</span> to launch the <span style={{color:'#f46600'}}>Tours for Books</span> business. Profits generated from the tours will contribute to our education fund to provide books and scholarships to underprivileged children. By choosing <span style={{color:'#f46600'}}>Tours for Books</span>, tourists truly help us to improve lives by buying books and providing scholarships to underprivileged children, as well as support disadvantaged youth in our Better job for youth vendors in Hanoi project.</h4>
		  <h4>We offer a wide range of package tours, travel services and other travel solutions to individuals, families, large groups and travel agencies.
		Below you can find a list of some main products we offer:</h4>
    </div>
    <Grid>
    <Row>
    <Col xs={12} sm={6} md={4} style={{minHeight:'300px'}}>
      <Thumbnail src={ CompModalThumb } alt="242x200">
        <h3 style={{color: '#00ba5d'}}>Comprehensive Vietnam Tours</h3>
        <div className='center-top-row'>
          <CompModal></CompModal>&nbsp;
          <a href={ CompBrochure }><Button>Brochure</Button></a>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={ NorthModalThumb } alt="242x200">
        <h3 style={{color: '#00ba5d'}}>Northern Vietnam Tours</h3>
        <div className='center-top-row'>
          <NorthModal></NorthModal>&nbsp;
          <a href={ NorthBrochure }><Button>Brochure</Button></a>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={ CentralModalThumb } alt="242x200">
        <h3 style={{color: '#00ba5d'}}>Central Vietnam Tours</h3>
        <div className='center-top-row'>
          <CentralModal></CentralModal>&nbsp;
          <a href={ CentralBrochure }><Button>Brochure</Button></a>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={ SouthModalThumb } alt="242x200">
        <h3 style={{color: '#00ba5d'}}>Southern Vietnam Tours</h3>
        <div className='center-top-row'>
          <SouthModal></SouthModal>&nbsp;
          <a href={ SouthBrochure }><Button>Brochure</Button></a>
        </div>
      </Thumbnail>
    </Col>
    <Col xs={12} sm={6} md={4}>
      <Thumbnail src={ CustomModalThumb } alt="242x200">
        <h3 style={{color: '#00ba5d'}}>Custom Tours</h3>
        <div className='center-top-row'>
          <CustomModal></CustomModal>&nbsp;
        </div>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
  </div>
)

module.exports = TourForBook
