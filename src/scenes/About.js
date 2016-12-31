import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

import About1 from '../images/About1.jpg'
import About2 from '../images/About2.jpg'

const About = () => (
  <div className="container">
  <div>
    <h1 style={{ marginBottom: 0}}>Who We Are</h1>
    <Image alt='Tour For Book' src={ About1 } style={{ width: '100%', padding: '0 5%', margin:'3% 0'}}/>
    <div className="center-top-col">
        <h4>The Better Life Vietnam initiative was started in the spring of 2010 by Ms. Nguyen Minh Thinh of Hanoi, and the Walter family of the town of Weiterstadt, near Frankfurt, Germany. They met in Hanoi and realized that they have a shared passion to help improve the lives of the underprivileged people in Vietnam. Their enthusiasm is contagious, and <span style={{color:'#00ba5d'}}>Better Life Vietnam</span> now includes a growing network of individuals in Vietnam, Europe, and the United States.</h4>
        <h4><span style={{color:'#00ba5d'}}>Better Life Vietnam</span> was founded with the belief that access to education, healthcare, food, clean water, and a decent quality of life are basic human rights. We realized that because there is so much need in communities throughout Vietnam, it is important to simply get started by helping some communities with their most basic needs. With that in mind, we decided to focus our activities on helping the underprivileged people to have better education, better living conditions, better healthcare and better work.
    	  </h4>
    </div>
  </div>
  <Grid>
    <h1 style={{ marginBottom: '3%'}}>Our Vision</h1>
    <Row className="show-grid row-fluid" style={{padding: '10px 0'}}>
      <Col xs={12} sm={6} className="center-top-col">
        <Image alt='Tour For Book' src={ About2 } style={{ width: '100%', padding: '0 5%'}}/>
      </Col>
      <Col xs={12} sm={6} className="center-top-col">
        <h4>Underprivileged children and youth in Vietnam have access to:</h4>
    		<h4>Better education</h4>
    		<h4>Better employment</h4>
    		<h4>Better living conditions</h4>
    		<h4>Better healthcare</h4>
      </Col>
    </Row>
  </Grid>
  <div>
    <h1 style={{ marginBottom: 0}}>Youth Encouragement Scheme Vietnam</h1>
    <h1>(YES Vietnam)</h1>
      <h4>Since 2016, the Founders of Better Life Vietnam have started the new plan <i>Youth Encouragement Scheme Vietnam</i> (YES Vietnam) that focuses on providing underprivileged children and youth with necessary assistance for their development. We believe that if we offer these children and youth our help at the right time, they will be able to take off. The end goal of YES Vietnam is to address child labor issues in Vietnam.</h4>
  </div>
</div>
)

module.exports = About
