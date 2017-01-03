import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const compModal = React.createClass({
  getInitialState () {
    return { showModal: false }
  },

  close () {
    this.setState({ showModal: false })
  },

  open () {
    this.setState({ showModal: true })
  },

  render () {
    return (
      <div>
        <Button style={{backgroundColor: '#00ba5d', color: 'white'}} onClick={this.open}>Learn More</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Comprehensive Vietnam Tours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>If you have long trip and are looking for package tour which cover all attractions of whole Vietnam, this option is perfect choice for you to discover Vietnam country in depth.</p>
            <ul>
              <li>Overview of Hanoi - the heart of the country: center of culture & economy</li>
              <li>Wonderful cruise trip on Halong bay</li>
              <li>Hue forbidden citadel for royal family in the past</li>
              <li>Stunning architecture of Japanese, Chinese and Vietnamese inside Hoian ancient town</li>
              <li>Vietnam cuisine with cooking class</li>
              <li>Luxury beach vacation in Nha Trang</li>
              <li>Dalat city is famous for perfect weather and romantic scenery</li>
              <li>Dinner cruise on Saigon river (also called Ho Chi Minh river)</li>
              <li>Mekong delta and floating local life</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

module.exports = compModal
