import React from 'react'
import { Link } from 'react-router'
import { Image, Button, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Highlight from '../Highlight/Highlight'
import Sponsor from '../Highlight/Sponsor'
import FreeBookLibraryPic from '../images/FreeBookLibrary.jpg'
import fb_og_img from '../images/fb_og_image.png'
import About1 from '../images/About1.jpg'
import './Landing.css'

class Landing extends React.Component {
  render () {
    return (
        <div className=''>
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
          <p>BLV and VietDan Travel partnered together to launch<strong> Tours for Books</strong>, a social enterprise that organizes tours and travel services in Vietnam</p>
          <p><strong>All profits generated </strong>from this business will be used to <strong>support the education projects.</strong></p>
        </div>
        <Link to='/tours-travel-services'><Button>Learn More</Button></Link>
      </Col>
    </div>
    <div className='center-top-col cover-container'>
      <Image className='about-pic' src={About1} />
    </div>
    <Highlight />
    <hr/>
    <div className='container' style={{padding: '2%'}}>
      <h3>Our Sponsors</h3>
      <Sponsor />
      <div><p style={{textAlign: 'center'}}><Link to='/our-donors'>View all</Link> of our individual and corporate sponsors</p></div>
    </div>
    <div className='footer-container' style={{display:'inline-block'}}>
      <Col className='footer-col' xs={12} sm={4}>
        <Col className='footer-info-col' xs={6}>
          <h6>About</h6>
          <Link to='/about'><p>Who We Are</p></Link>
          <Link to='/our-team'><p>Our Team</p></Link>
          <h6>What We Do</h6>
          <Link to='/book-library'><p>Book Library</p></Link>
          <Link to='/blv-scholarship'><p>BLV Scholarship</p></Link>
        </Col>
        <Col className='footer-info-col' xs={6}>
          <h6>Tours For Books</h6>
          <Link to='/tours-travel-services'><p>Tours and Travel Services</p></Link>
          <Link to='/voluntourism'><p>Voluntourism</p></Link>
          <Link to='/study-tours'><p>Study Tours</p></Link>
          <Link to='/our-donors'><h6 style={{color:'black'}}>Our Donors</h6></Link>
          <Link to='/CommentBox'><h6 style={{color:'black'}}>Contact</h6></Link>
        </Col>
        </Col>
        <Col className='footer-col footer-social-media-col' xs={12} sm={4}>
          <h6>Follow Us on Social Media</h6>
          <Col className='footer-icon-col' xs={4}>
            <a href='https://www.facebook.com/Better-Life-Vietnam-111667145557377/'><FontAwesome name='facebook-official fa-2x' /></a>
          </Col>
          <Col className='footer-icon-col' xs={4}>
            <a href='https://www.instagram.com/betterlifevietnam/'><FontAwesome name='instagram fa-2x' /></a>
          </Col>
          <Col className='footer-icon-col' xs={4}>
            <a href='https://twitter.com/BetterLifeVN?lang=en'><FontAwesome name='twitter fa-2x' /></a>
          </Col>
        </Col>
        <Col className='footer-col' xs={12} sm={4}>
          <div className='center-top-col'>
            <h6>Donate Now</h6>
            <div className='footer-icon-col'>
              <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                <input type='hidden' name='cmd' value='_s-xclick' />
                <input type='hidden' name='hosted_button_id' value='K9P45W3RSSL44' />
                <input type='image' style={{ }} src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' name='submit' alt='PayPal - The safer, easier way to pay online' />
              </form>
            </div>
          </div>
        </Col>
      </div>
      <Image src={fb_og_img}/>
    </div>
    )
  }
}
module.exports = Landing
