import React from 'react'
import { Grid, Row, Col, Clearfix, Image } from 'react-bootstrap'

import HaGiangImage from '../images/Voluntourism-in-Ha-Giang.jpg'
import HanoiImage from '../images/Voluntourism-in-Hanoi.jpg'
import SapaImage from '../images/Voluntourism-in-Sapa.jpg'

import HanoiBrochure from '../docs/voluntourismBrochure/Voluntourism-in-Hanoi.pdf'
import HaGiangBrochure from '../docs/voluntourismBrochure/Voluntourism-in-Ha-Giang.pdf'
import SapaBrochure from '../docs/voluntourismBrochure/Voluntourism-in-Sapa.pdf'

const Voluntourism = () => (
  <div>
    <div className='container'>
      <div className='addMargin'>
        <p>Are you a tourist who would like to visit a new place while also using your expertise and time to help local communities? Are you a student who would like to gain cultural experiences through community service? Are you prepared to embark on a journey that will give you a brand new perspective on the lives of local Vietnamese people? Would you like to have the power to change the lives of people living in some of the most remote areas in Vietnam, where access to quality education is limited? <strong>Better Life Vietnam</strong> offers a variety of voluntourism trips that will match your needs.</p>
      </div>
      <div>
        <h1>your benefit from volunteering</h1>
        <p><strong>Cultural Exchange</strong> - Immerse yourself in the local culture and get to know the way of the Vietnamese locals in a very personal and intimate setting.</p>
        <p><strong>Education Support & Development</strong> - Help change the lives of children who have not been given an equal chance in life in education.</p>
        <p><strong>Activities</strong> include: biking, fishing, visiting local markets, traditional cooking, tree planting, campfire, song and dances, watching the sunset, taking photos of terrace rice fields, local attractions based on your interests.</p>
      </div>
    </div>
    <div>
      <Grid>
        <Row className='show-grid'>
          <Col sm={6} md={4}>
            <h3>Voluntourism in Hanoi &amp; surrounding areas</h3>
            <p>We will arrange for you to visit charity organizations where you can offer your volunteer services or give gifts directly to beneficiaries. The trip will also be a good chance for you to explore the suburban areas of Hanoi.</p>
            <p>The length of the trip is also designed to meet your particular needs. Currently, we offer a 4-day trip to visit Thuy An Rehabilitation Center for Handicapped Children. We will depart from Hanoi, transfer to Ky Son village in northwest Hanoi (45 km away), and then homestay in Ky Son village. There, we will bike around Ky Son, fish, and participate in other charity activities at Thuy An Rehabilitation Center for Handicapped Children.</p>
            <div className='center-top-col'>
              <p><a href={HanoiBrochure} target='_blank'>Download Voluntourism in Hanoi Brochure</a></p>
              <Image style={{maxWidth: '300px'}} alt='Hanoi volunteer' src={HanoiImage} />
            </div>
          </Col>
          <Col sm={6} md={4}>
            <h3>Voluntourism in Sapa</h3>
            <div className='center-top-col'>
              <p><a href={HaGiangBrochure} target='_blank'>Download Voluntourism in Sapa Brochure</a></p>
              <Image style={{maxWidth: '300px'}} alt='Hanoi volunteer' src={SapaImage} />
            </div>
          </Col>
          <Col sm={6} md={4}>
            <h3>Voluntourism in Ha Giang</h3>
            <div className='center-top-col'>
              <p><a href={SapaBrochure} target='_blank'>Download Voluntourism in Ha Giang Brochure</a></p>
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
