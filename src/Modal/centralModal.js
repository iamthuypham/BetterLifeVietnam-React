import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const centralModal = React.createClass({
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
        <Button style={{backgroundColor:'#00ba5d', color:'white'}} onClick={this.open}>Learn More</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Central Vietnam Tours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
    			<p>Central of Vietnam is full of excitement to discover. Relax in Hoi An and join some cooking class, lantern workshop; or back to Hue to indulge in the ancient citadel; or head on a cave exploration trip... each tour will bring you the colorful culture of Vietnam.
</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = centralModal