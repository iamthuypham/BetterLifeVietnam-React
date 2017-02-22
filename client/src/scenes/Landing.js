import React from 'react'
import { Link } from 'react-router'
import { Image, Button, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Highlight from '../Highlight/Highlight'
import Sponsor from '../Highlight/Sponsor'
import FreeBookLibraryPic from '../images/FreeBookLibrary.jpg'
import fb_og_img from '../images/fb_og_image.jpg'
import About1 from '../images/About1.jpg'
import Footer from './Footer'
import './Landing.css'

class Landing extends React.Component {
  render () {
    return (
        <div className=''>
        <Image style={{display:'none'}} src={fb_og_img}/>
    <div className='center-top-col cover-container'>
      <div className='cover-title'>
        <h1>Working to improve education conditions for underprivileged children and youth in Vietnam</h1>
        <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value='K9P45W3RSSL44' />
          <input className='btn' type='submit' value='Donate Now' name='submit' alt='PayPal - The safer, easier way to pay online' />
        </form>
      </div>
      <Image className='cover-pic' src={FreeBookLibraryPic} />
    </div>
    <div className='col-activity-container' style={{display:'inline-block'}}>
      <Col className='col-activity' xs={12} sm={4} md={4}>
        <div className='col-icon'><a><FontAwesome name='book' /></a></div>
        <h3>BLV Books Library</h3>
        <div className='col-p'>
          <p>BLV <strong>creates classroom libraries</strong> that students can use at school or home, and monitors their progress and engagement.</p>
          <p><strong>So far, the team has built more than 10,000 bookcases for nearly 500,000 children in rural areas.</strong></p>
        </div>
        <Link to='/book-library'><Button>Learn More</Button></Link>
      </Col>
      <Col className='col-activity' xs={12} sm={4} md={4}>
        <div className='col-icon'><a><FontAwesome name='graduation-cap' /></a></div>
        <h3>BLV Scholarship Program</h3>
        <div className='col-p'>
          <p>BLV offers a scholarship program to <strong>cover school expenses</strong> and encourage the whole family to get involved to support the needs of their children.</p>
          <p><strong>Scholarships range from $30-80 per month</strong> based on level of education.</p>
        </div>
        <Link to='/blv-scholarship'><Button>Learn More</Button></Link>
      </Col>
      <Col className='col-activity' xs={12} sm={4} md={4} >
        <div className='col-icon'><a><FontAwesome name='map-o fa-stack-1x' /><FontAwesome name='map-marker fa-stack-1x' /></a></div>
        <h3>Responsible Tourism</h3>
        <div className='col-p'>
          <p>BLV and Viet Dan Travel partnered together to launch<strong> Tours for Books</strong>, a social enterprise that organizes tours and travel services in Vietnam</p>
          <p><strong>All profits generated </strong>from this business will be used to <strong>support the education projects.</strong></p>
        </div>
        <Link to='/tours-travel-services'><Button>Learn More</Button></Link>
      </Col>
    </div>
    <div className='center-top-col cover-container'>
      <Image className='about-pic' src={About1} />
    </div>
    <Highlight />
    <div className='grey-bg'>
      <div className='container' style={{padding: '2%'}}>
        <h3>Our Sponsors</h3>
        <Sponsor />
        <div><p style={{textAlign: 'center'}}><Link to='/our-donors'>View all</Link> of our individual and corporate sponsors</p></div>
      </div>
    </div>
    
    <Footer />
    </div>
    )
  }
}
module.exports = Landing
