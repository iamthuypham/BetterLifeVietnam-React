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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Vu Thao Hoan<h5 style={{textIndent: '0'}}>Program Coordinator</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Vu Thao Hoan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
      			 <p>“I found that a meaningful life isn't about acquiring money or social status. It is about dedicating your life to make positive changes to disadvantage people, communities, especially to children.”</p>
      				<p>Hoan spent her childhood in Western Ha Noi. She graduated from Diplomatic Academy of Vietnam with a degree in International Economics. She strong desires to pursue the career in promoting human welfare and social reforms.
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