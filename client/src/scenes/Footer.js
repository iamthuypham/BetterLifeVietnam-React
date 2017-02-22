import React from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
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
          <h6>Tours for Books</h6>
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
    )
  }
}
module.exports = Footer
