import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import ShowTourCard from '../Modal/ShowTourCard'
import tourData from '../tour.json'
import '../scenes/VietDan.css'
import Footer from './Footer'

const VietDan = () => (
  <div className='VietDan'>
    <div className='cover-container'>
      <div className='cover-title'>
        <h1>TFB + VietDan</h1>
      </div>
      <Image className='cover-pic' src={process.env.PUBLIC_URL + '/images/toursImg/CentralTour.jpg'}/>
    </div>
    <div className='container' style={{paddingTop: '30px'}}>
        <h1 style={{color: 'black'}}> TFB + VietDan Partnership </h1>
        <p style={{textAlign: 'center'}}>Tours For Books is a social enterprise created in partnership with Better Life Vietnam and VietDan Travel that offers a wide range of tours and travel services in Vietnam. VietDan Travel is a fully licensed international inbound tour operator recognized by Vietnam National Administration of Tourism. All profits generated from Tours For Books support the programs of Better Life Vietnam, a non-profit organization that works to improve education conditions for underprivileged children and youth in Vietnam.</p>
        <p>We offer a wide range of package tours, travel services and other travel solutions to individuals, families, large groups and travel agencies.
        </p>
    </div>
    <div className='col-activity-container' style={{display:'inline-block'}}>
      <Grid>
        <Row>
        <Col className='col-activity' xs={12} sm={4} md={4}>
          <div className='col-icon'><a><FontAwesome name='map-o fa-stack-1x' /><FontAwesome name='map-marker fa-stack-1x' /></a></div>
          <Link to=''><Button>I want to Tour</Button></Link>
        </Col>
        <Col className='col-activity' xs={12} sm={4} md={4}>
          <div className='col-icon'><a><FontAwesome name='graduation-cap' /></a></div>
          <Link to='/voluntourism'><Button>I want to Volunteer</Button></Link>
        </Col>
        <Col className='col-activity' xs={12} sm={4} md={4} >
          <div className='col-icon'><a><FontAwesome name='book' /></a></div>
          <Link to='/study-tours'><Button>I want to Learn</Button></Link>
        </Col>
        </Row>
      </Grid>
    </div>
    <div style={{paddingTop: '30px'}}>
      <h1 style={{color: 'black'}}>Our Popular Tours</h1>
      <Grid>
          <Row>
            {tourData.tours.map((tour) => (
              (tour.popular)?
                <ShowTourCard {...tour} key={tour.id} />
                :
                ""
              ))}
          </Row>
        </Grid>
    </div>
    <Footer />
  </div>
)

module.exports = VietDan
