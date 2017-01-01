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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Thinh Nguyen<h5 style={{textIndent: '0'}}>Founder/Director</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Thinh Nguyen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        			<p>“Living my whole life in a developing country, I have seen with my own eyes how poverty affects the human rights of people around me. Underprivileged people in my community lack food, so they do not lead a normal, healthy life. They lack resources and so cannot access better education or a reasonable standard of healthcare. Their situation gave me the passion and motivation to found and develop Better Life Vietnam (BLV).” </p>
      				<p>Thinh Nguyen was born and grew up in Hanoi, Vietnam and is passionate about human rights. She graduated from the Diplomatic Academy of Vietnam, where she studied international law. Thinh founded Better Life Vietnam with the belief that access to education, food, clean water, healthcare, and a decent quality of life are basic human rights.
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

module.exports = compModal