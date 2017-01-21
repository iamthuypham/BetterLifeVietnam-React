import React from 'react'
import { Image, Button, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Highlight from '../Highlight/Highlight'
import FreeBookLibraryPic from '../images/FreeBookLibrary.jpg'
import About1 from '../images/About1.jpg'
import './Landing.css'

const Landing = () => (
  <div className=''>
    <div className='center-top-col cover-container container-fluid'>
      <div className='cover-title'>
        <h1>Working to improve education conditions for underprivileged children and youth in Vietnam</h1>
        <Button>Donate Now</Button>
      </div>
      <Image className='cover-pic' src={FreeBookLibraryPic} />
    </div>
    <div className='col-activity-container' style={{display:'inline-block'}}>
      <Col className='col-activity' xs={12} sm={4} md={4}>
        <div className='col-icon'><a><FontAwesome name='book' /></a></div>
        <h3>BLV Books Library</h3>
        <div className='col-p'>
          <p>BLV <strong>creates classroom libraries</strong> that students can use at school or home, and monitors their progress and engagement.</p>
          <p><strong>The team has built more than 10,000 bookcases for nearly 500,000 children in rural areas to date.</strong></p>
        </div>
        <Button>Learn More</Button>
      </Col>
      <Col className='col-activity' xs={12} sm={4} md={4}>
        <div className='col-icon'><a><FontAwesome name='graduation-cap' /></a></div>
        <h3>BLV Scholarship Program</h3>
        <div className='col-p'>
          <p>BLV offers a scholarip program to <strong>cover schoole expenses</strong> and encourage the whole family to get involved to support the needs of their children</p>
          <p><strong>Scholarships range from $30 - $80 per month</strong> based on the level of education</p>
        </div>
        <Button>Learn More</Button>
      </Col>
      <Col className='col-activity' xs={12} sm={4} md={4} >
        <div className='col-icon'><a><FontAwesome name='map-o fa-stack-1x' /><FontAwesome name='map-marker fa-stack-1x' /></a></div>
        <h3>Responsible Tourism</h3>
        <div className='col-p'>
          <p>BLV and VietDan Travel partnered together to launch<strong> Tours for Books</strong>, a social enterprise that organizes tours and travel services in Vietnam</p>
          <p><strong>All profits generated </strong>from this business will be used to <strong>support the education projects.</strong></p>
        </div>
        <Button>Learn More</Button>
      </Col>
    </div>
    <div className='center-top-col cover-container'>
      <Image className='about-pic' src={About1} />
    </div>
    <Highlight />
    <div className='footer-container' style={{display:'inline-block'}}>
      <Col className='footer-col' xs={12} sm={5}>
        <Col className='footer-info-col' xs={6}>
          <h6>About</h6>
          <p>Who We Are</p>
          <p>Our Team</p>
          <h6>What We Do</h6>
          <p>Book Library</p>
          <p>BLV Scholarship</p>
        </Col>
        <Col className='footer-info-col' xs={6}>
          <h6>Tours For Books</h6>
          <p>Tours and Travel Services</p>
          <p>Voluntourism</p>
          <p>Study Tours</p>
          <h6>Our Donors</h6>
          <h6>Contact</h6>
        </Col>
      </Col>
      <Col className='footer-col footer-social-media-col' xs={12} sm={4}>
        <h6>Follow Us on Social Media</h6>
        <Col className='footer-icon-col' xs={4}>
          <a><FontAwesome name='facebook-official fa-2x' /></a>
        </Col>
        <Col className='footer-icon-col' xs={4}>
          <a><FontAwesome name='instagram fa-2x' /></a>
        </Col>
        <Col className='footer-icon-col' xs={4}>
          <a><FontAwesome name='twitter fa-2x' /></a>
        </Col>
      </Col>
      <Col className='footer-col' xs={12} sm={3}>
        <div className='center-top-col'>
          <h6>Donate Now</h6>
          <div className='footer-icon-col'>
            <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
              <input type='hidden' name='cmd' value='_s-xclick' />
              <input type='hidden' name='hosted_button_id' value='K9P45W3RSSL44' />
              <input type='image' style={{ }} src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' name='submit' alt='PayPal - The safer, easier way to pay online!' />
            </form>
          </div>
      </div>
      </Col>
    </div>
  </div>
)

module.exports = Landing
