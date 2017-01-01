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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Phuong Nguyen<h5 style={{textIndent: '0'}}>Program Assistant</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Phuong Nguyen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        			<p>Phuong graduated from Dai Nam University with a degree in English Language. Her strong passion in helping the children in need motivated her to offer her volunteer services with Better Life Vietnam since the beginning. After graduation, she has joined the BLV Team as the Program Assistant.</p>
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