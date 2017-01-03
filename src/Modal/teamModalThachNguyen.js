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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Thach Nguyen<h5 style={{textIndent: '0'}}>Senior Program Advisor</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Thach Nguyen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Nguyen Quang Thach is the founder of CKACD, who has devoted his lifetime to a library revolution. To date, he has spent 10 years to design and more than nine years to implement five main civil library models including Clan library, Parish library, Back- front military officer library and Community library for disadvantaged groups such as the homeless, ethnic minorities and the disabled. In 2015, he finished his 2,700km-historical walk throughout the nation for policy advocacy.</p>
            <p>Sharing the passion of improving education conditions for underprivileged children and youth, Thach and Thinh have decided to team up to reach the common goal - improving access to books and better education opportunities for children and youth in rural villages of Vietnam. Thach has played a role as a Senior Program Adviser to Better Life Vietnam.</p>
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
