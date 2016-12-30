import React from 'react'
import './NavBar.css'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
}
from 'react-bootstrap'

const NavBar = (props) => (
  <div className='app-container'>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>Better Life Vietnam Logo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey='1' title='About' id='basic-nav-dropdown'>
            <MenuItem eventKey='1.1'>Who We Are</MenuItem>
            <MenuItem eventKey='1.2'>Our Team</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='2' title='What We Do' id='basic-nav-dropdown'>
            <MenuItem eventKey='2.1'>Free Book Library</MenuItem>
            <MenuItem eventKey='2.2'>Scholarship</MenuItem>
            <MenuItem eventKey='2.2'>Job Assistance</MenuItem>
          </NavDropdown>
          <NavDropdown eventKey='3' title='Responsible Tourism' id='basic-nav-dropdown'>
            <MenuItem eventKey='3.1'>Tour Info</MenuItem>
            <MenuItem eventKey='3.2'>Tour For Book</MenuItem>
          </NavDropdown>
          <NavItem eventKey='4' title='Contact'>Contact</NavItem>
          <NavItem eventKey='5' title='Donate'>Donate</NavItem>
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
