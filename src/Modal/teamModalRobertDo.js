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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Robert Do<h5 style={{textIndent: '0'}}>Tour  Manager</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Robert Do</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Robert Do is a Vietnamese guy with over 6 years experiencing in professional travel, used to be a local tour operator for many famous online travel agents such as Expedia, Viator, Gray Line, City Discovery etc. His desire is making a new way to explore Vietnam, and helping tourists to discover the totally different sides of his homeland. In 2014, he co-founded VietDan travel - a fully-licensed international inbound tour operator recognized by Vietnam National Administration of Tourism.</p>
            <p>Robert and Thinh met in 2010 and shared a passion of improving the lives of underprivileged children and youth. They have worked hard together to improve education conditions of children and youth living in rural and mountainous areas of Vietnam. VietDan is now a travel partner of Better Life Vietnam.</p>
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
