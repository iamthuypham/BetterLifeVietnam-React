import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'
import logo from '../images/BLV-logo.png'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const NavBar = (props) => (
  <div className='container-fluid'>
    <div className='space-top-row'>
      <div style={{minHeight: '50px', padding: '10px 0 10px 30px'}}><Link to='/' ><Image style={{ width: '100%', maxWidth: '370px'}} src={logo} responsive /></Link></div>
      <div style={{minHeight: '50px', padding: '10px 30px 10px 0'}}>
        <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value='K9P45W3RSSL44' />
          <input type='image' style={{ width: '100%'}} src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif' name='submit' alt='PayPal - The safer, easier way to pay online!' />
        </form>
      </div>
    </div>
    <Navbar collapseOnSelect style={{margin: '0'}}>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey='1' title='About' id='basic-nav-dropdown'>
            <MenuItem eventKey='1.1'><Link to='/about'><div>Who We Are</div></Link></MenuItem>
            <MenuItem eventKey='1.2'><Link to='/our-team'><div>Our Team</div></Link></MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='2' title='What We Do' id='basic-nav-dropdown'>
            <MenuItem eventKey='2.1'><Link to='/book-library'><div>Books Library</div></Link></MenuItem>
            <MenuItem eventKey='2.2'><Link to='/blv-scholarship'><div>BLV Scholarship</div></Link></MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='3' title='Tours for Books' id='basic-nav-dropdown'>
            <MenuItem eventKey='3.1'><Link to='/tours-travel-services'><div>Tours & Travel Services</div></Link></MenuItem>
            <MenuItem eventKey='3.2'><Link to='/voluntourism'><div>Voluntourism</div></Link></MenuItem>
            <MenuItem eventKey='3.3'><Link to='/study-tours'><div>Study Tours</div></Link></MenuItem>
          </NavDropdown>
          <NavItem eventKey='4' title='Our Donors'><Link to='/our-donors'>Sponsors</Link></NavItem>
          <NavItem eventKey='5' title='Contact'><Link to='/CommentBox'>Contact</Link></NavItem>
          <div className='socialMedia'>
            <a href='https://www.facebook.com/Better-Life-Vietnam-111667145557377/'><FontAwesome name='facebook-square' /></a>
            <a href='https://www.instagram.com/betterlifevietnam/'><FontAwesome name='instagram' /></a>
            <a href='https://twitter.com/BetterLifeVN?lang=en'><FontAwesome name='twitter' /></a>
          </div>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    <div>
      {props.children}
    </div>
  </div>
)
const {
  element
} = React.PropTypes

NavBar.propTypes = {
  children: element.isRequired
}
export default NavBar
