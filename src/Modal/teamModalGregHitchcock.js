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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Greg Hitchcock<h5 style={{textIndent: '0'}}>Communications Specialist</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Greg Hitchcock</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>“When I heard about Better Life Vietnam, I knew I wanted to be a part of helping Vietnamese children by offering tourists a chance to see what life is like in a developing country with all its charm, splendor and richness. Just ask others who have been here and they will say, ‘Wow! What a difference this has made’.”</p>
            <p>Greg was born and raised in New York State, U.S.A. He is a consummate storyteller with a passion for writing and editing, video producing, and photography. He earned his Bachelor of Arts degree from the University at Albany, State University of New York, in English with a minor in Political Science. Greg is also a proud U.S. Army veteran experienced in teamwork and cooperation.
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
