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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Bethany Tietjen<h5 style={{textIndent: '0'}}>Volunteer</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Bethany Tietjen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        			<p>Originally from New York, Bethany lived overseas for most of her childhood and developed a love of travel and philanthropy from a young age. She received her Bachelor of Arts in International Relations and German Studies from American University in Washington, DC, and has experience working in nonprofits and government agencies both in the U.S. and abroad. Her main passion lies in finding sustainable, lasting solutions to the world's biggest development issues. She is currently working as an English teacher in Hanoi on top of her work with Better Life Vietnam.</p>
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