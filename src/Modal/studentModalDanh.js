import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const compModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Doan Huu Danh<h5 style={{textIndent: '0'}}>14 years old, Ben Tre</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Doan Huu Danh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
  						<p>Danh is a 14 year old boy without a father from the time he was born. He has been cared for by his mother and grandmother who have no stable job. Although he also has to work to support the family, he still studies well at school. He wishes to finish his high school and to be able to go to university. He will enter high school next year and will be eligible for a high school scholarship package of $50 per month.</p>
  						<a href="http://caplayeuthuong.vtv24.vtv.vn/cau-be-mo-coi-cha-me-ngheo-quyet-tam-hoc-gioi/a79.html">Read More</a>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = compModal