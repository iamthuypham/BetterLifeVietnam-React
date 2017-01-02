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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Le Quoc Son<h5 style={{textIndent: '0'}}> </h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Le Quoc Son</Modal.Title>
            </Modal.Header>
            <Modal.Body>
  						<p>Son is one of a family of three children. His father left the family when she was a child and his mother has suffered from a serious uterine illness. Despite this serious disease, his mother has been working hard to raise him and his sisters. His mother's job as a dish washer brings the family an income of less than VND 2,000,000 per month (less than $90). This puts Ngan, her brother and her sister at the risk of having to quit school. We hope to offer Son a high scholarship package of $50 per month.</p>
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