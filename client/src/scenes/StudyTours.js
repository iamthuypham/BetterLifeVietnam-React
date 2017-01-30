import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import '../scenes/StudyTours.css'

import StudyTour1 from '../images/study-tour-1.jpg'
import StudyTour2 from '../images/study-tour-2.jpg'
import StudyTour3 from '../images/study-tour-3.jpg'

const StudyTours = () => (
  <div className='container studyTours'>
    <div>
      <h1 className='addMargin'>Study Tours</h1>
      <div>
        <p>
        Study Tours offer students the opportunity to learn first-hand from local businesses, NGOs and education institutions through <strong>a fun and vital experience</strong>. The program will be designed to <strong>your time and interests</strong>. Feel free to <Link to='/CommentBox'>contact us</Link> with your inquiries and, together we will develop a program that suits your needs.
        </p>
      </div>
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={4}><Image alt='study-tour-1' src={StudyTour1} rounded /></Col>
          <Col xs={6} md={4}><Image alt='study-tour-2' src={StudyTour2} rounded /></Col>
          <Col xs={6} md={4}><Image alt='study-tour-3' src={StudyTour3} rounded /></Col>
        </Row>
      </Grid>
    </div>
  </div>
)

module.exports = StudyTours
