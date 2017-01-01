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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Le Thi Thu Ngan<h5 style={{textIndent: '0'}}>16 years old, Khanh Hoa</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Le Thi Thu Ngan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
							<p>Ngan is one of a family of three children. Her father left the family when she was a child and her mother has suffered from a serious uterine illness. Despite having this serious disease, her mother has been working hard to raise Ngan and her sister and brother. Her mother's job as a dish washer brings the family an income of less than VND2,000,000 per month (less than $90). This puts Ngan, her brother and her sister at risk of having to quit school. We hope to offer Ngan a high scholarship package of $50 per month.</p>
							<a href="http://caplayeuthuong.vtv24.vtv.vn/nguoi-me-ngheo-dau-yeu-gang-suc-nuoi-ba-con-an-hoc/a242.html">Read More</a>
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