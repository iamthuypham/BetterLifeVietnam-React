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
        <h3 style={{ color:'#00ba5d', cursor:'pointer' }} onClick={this.open}>Lo Thi Chua<h5 style={{textIndent: '0'}}>18 years old, Ha Giang</h5></h3>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>Lo Thi Chua</Modal.Title>
            </Modal.Header>
            <Modal.Body>
							<p>Chua is an orphan and has been taken care of by a social center in Ha Giang Province. She has been studying really hard and has passed an exam into university in Tuyen Quang province. She is a big sister standing in the middle in this photo. We hope to offer her a university scholarship of $80 per month.</p>
							<a href="http://caplayeuthuong.vtv24.vtv.vn/tam-guong-vuot-kho-vuon-len-trong-cuoc-song-va-hoc-tap/a52.html">Read More</a>
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