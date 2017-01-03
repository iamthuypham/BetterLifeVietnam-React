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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Alyssa Kopelman<h5 style={{textIndent: '0'}}>Marketing Specialist</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Alyssa Kopelman</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>“Better Life Vietnam & Tours For Books exists at the crossroads of my interests of education, children and tourism. I couldn’t be more thrilled to get involved with the organization and help bring a brighter and better future for the children and youth of Vietnam.”</p>
            <p>Alyssa was born and grew up in New York, U.S.A. With a strong passion for helping others and an avid love to travel, Alyssa is inspired to give back through her professional marketing and design skills. She is a graduate of the University of Delaware, earning a Bachelor of Science in Marketing with a minor in Advertising and a Bachelor of Arts in Communications.
      				</p>
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
