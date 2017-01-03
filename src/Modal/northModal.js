import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const northModal = React.createClass({
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
            <Modal.Title style={{color: '#00ba5d'}}>Northern Vietnam Tours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>The North of Vietnam is truly a must-see area for anyone coming to this beautiful country. From a short day tour in Hanoi - the capital city, a boat trip in the scenic Hoa Lu Tam Coc, few days cruising in the wonderful Halong Bay, to the adventurous trekking in Sapa... they're all worth a try.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

module.exports = northModal
