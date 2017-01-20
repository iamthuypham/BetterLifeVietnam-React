import React from 'react'
import { Grid, Row, Col, Clearfix, Image } from 'react-bootstrap'

import HaGiangImage from '../images/Voluntourism-in-Ha-Giang.jpg'
import HanoiImage from '../images/Voluntourism-in-Hanoi.jpg'
import SapaImage from '../images/Voluntourism-in-Sapa.jpg'

const Voluntourism = () => (
  <div>
    <div className='container'>
      <div>
        <h4>Are you tourists who would like to visit a new place while also using your expertise and time to help local communities? Are you students who would like to gain experiences through participating in community work? Are you prepared to embark on a journey that will give you a brand new perspective on the lives of Vietnamese people living in the country? Would you like to have the power to change the lives of people living in some of the most remote reaches on Vietnam, where access to quality education is limited?</h4>
        <h4><span style={{color: '#00ba5d'}}>Better Life Vietnam</span> offers a variety of voluntourism trips that match your needs.</h4>
      </div>
      <div>
        <h1>your benefit from volunteering</h1>
        <h4><span style={{color: '#00ba5d'}}>Cultural Exchange</span> - Immerse yourself in the local culture and get to know the way of the Vietnamese people in a very personal and intimate settings</h4>
        <h4>Help to <span style={{color: '#00ba5d'}}>change the lives of children</span> who have not been given an equal chance in life in education</h4>
        <h4>The activities include: Biking, Fishing, Visiting local market, Cooking, Tree Planting, Campfire, Song and Dances, Watch Sunset, Taking photos of terrace rice fields, Visiting places of Interest are just some of the activities to expect on your trip depending on the places you visit.</h4>
      </div>
    </div>
    <div>
      <Grid>
        <Row className='show-grid'>
          <Col sm={6} md={4}>
            <h3 style={{color: '#00ba5d'}}>Voluntourism in Hanoi &amp; around</h3>
            <h4>We will arrange for you to visit charity organizations where you can offer your volunteer services or give gifts directly to beneficiaries. The trip will also be a good chance for you to explore suburban of Hanoi city. The length of the trip is also designed to meet your particular needs.</h4>
            <h4>Currently, we offer a 4 day trip to visit the Thuy An Rehabilitation Center for Handicapped Children. We will depart from Hanoi, transfer to Ky Son village in the north-west of Hanoi - 45 km away, then homestay in Ky Son village. There, we will do activities like biking around Ky Son, fishing and other charity activities in the Center for Rehabilitation of Handicapped Children in Thuy An.</h4>
            <div className='center-top-col'>
              <h4><a href='download.php?f=Voluntourism-in-Hanoi.pdf'>Download Voluntourism in Hanoi Brochure</a></h4>
              <Image style={{maxWidth: '300px'}} alt='Hanoi volunteer' src={HanoiImage} />
            </div>
          </Col>
          <Col sm={6} md={4}>
            <h3 style={{color: '#00ba5d'}}>Voluntourism in Sapa</h3>
            <div className='center-top-col'>
              <h4><a href='download.php?f=Voluntourism-in-Hanoi.pdf'>Download Voluntourism in Hanoi Brochure</a></h4>
              <Image style={{maxWidth: '300px'}} alt='Hanoi volunteer' src={SapaImage} />
            </div>
          </Col>
          <Col sm={6} md={4}>
            <h3 style={{color: '#00ba5d'}}>Voluntourism in Ha Giang</h3>
            <div className='center-top-col'>
              <h4><a href='download.php?f=Voluntourism-in-Hanoi.pdf'>Download Voluntourism in Hanoi Brochure</a></h4>
              <Image style={{maxWidth: '300px'}} alt='Hanoi volunteer' src={HaGiangImage} />
            </div>
          </Col>
          <Clearfix visibleSmBlock />
        </Row>
      </Grid>
    </div>
  </div>
)

module.exports = Voluntourism
