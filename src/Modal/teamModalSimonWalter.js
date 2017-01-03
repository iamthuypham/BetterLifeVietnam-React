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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Simon Walter<h5 style={{textIndent: '0'}}>Co-Founder</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Simon Walter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Sonja and Simon Walter are born in the UK and Germany, have however spent most of their lives living in the Middle East.  Married in 1997 it was their plan to also start a young family, that however seemed impossible.  And so they had decided to adopt a child from Vietnam in 2001 and as destiny would have it, they fell pregnant after all and are blessed with two girls. In 2010 they made their way back to Vietnam to meet up with the birthparents, show the children the origin of their family and experience a different culture all together.</p>
            <p>Once again guided by fate they made the acquaintance with Chi who supported them on their journey and a friendship has been formed and an opportunity seized, where their desire to help and support underprivileged children could be supported with the local knowledge where the funds would be made to use without being consumed by an administrative apparatus.  Today they still reside in the Middle East and make use of opportunities to raise funds and share these for this noble cause.</p>
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
