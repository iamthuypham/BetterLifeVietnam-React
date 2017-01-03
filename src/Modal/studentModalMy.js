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
        <h3 style={{ color: '#00ba5d', cursor: 'pointer' }} onClick={this.open}>Le Ngoc My<h5 style={{textIndent: '0'}}>8 years old, Quang Ngai</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#00ba5d'}}>Le Ngoc My</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>My is an eight year old orphan. Her father died in an accident when My was seven months old. When she was three years old, her mother passed away because of liver cancer. She was then cared for by her grandparents who have a difficult life. Her grandmother is 68 years old and has a mental disease. My and her grandparents are dependent on a government allowance of VND800,000 VND per month ($35). We hope to offer My a primary scholarship package of $25 per month for her to be able to have healthy meals and go to school.</p>
            <a href='http://caplayeuthuong.vtv24.vtv.vn/thuong-thay-canh-be-my-mo-coi-phai-lam-bao-mau-cho-ba-ngoai/a168.html'>Read More</a>
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
