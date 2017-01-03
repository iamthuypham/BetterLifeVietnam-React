import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const customModal = React.createClass({
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
            <Modal.Title style={{color: '#00ba5d'}}>Custom Vietnam Tours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for trusting Tours For Books and giving us a chance to be your companion on your trip to Asia. Beside specific day tours and packages to our chosen destinations, we also offer tailor-made tour based on what you need and what you love: we are delighted to listen to your wish, and make it come true.</p>
            <p>All you need to do is sharing your idea to <a style={{color: '#00ba5d'}} href='mailto:blvtoursforbooks@gmail.com'>blvtoursforbooks@gmail.com</a> and our tour consultants will return to you instantly with advice. In case you would like to have a small talk, please drop us a call or visit our office to receive support.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})

module.exports = customModal
