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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Ha<h5 style={{textIndent: '0'}}>14 years old, Quang Ngai</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Ha</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Sponsored by: Mr. Mathieu Lamolle (Belgium)</p>
            <p>Ha is the eldest sister in a family of three children. She lost her father who was infected with HIV. Her mother is also infected with HIV. The family is dependent on a 40$ allowance per month from the government. Despite this difficult life, Ha is having good grades at school. We are thankful to Mr Mathieu Lamolle for offering her a secondary scholarship package of $35 per month.</p>
            <a href='http://caplayeuthuong.vtv24.vtv.vn/ba-be-con-hieu-thao-hoc-gioi-cua-nguoi-me-ngheo-co-hiv/a169.html' />
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
