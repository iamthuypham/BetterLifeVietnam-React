import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const southModal = React.createClass({
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
            <Modal.Title style={{color: '#00ba5d'}}>Southern Vietnam Tours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Southern Vietnam has always been on a must-do list of every traveler coming to the country. Join a city tour to see the bustling atmosphere of the metropolitan, or just come to the surburb to enjoy the floating life of the Delta. If you are a fan of history, don't forget to check out the tour to some famous historical site during the Vietnam War.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

module.exports = southModal
