const React = require('react')
import { Modal, Button } from 'react-bootstrap'

class ShowMessage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    showModal: true
    }
  this.open = this.open.bind(this)
  this.close = this.close.bind(this)
  }
  open() {
    this.setState({
      showModal: true
    })
  }
  close() {
    this.setState({
      showModal: false
    })
  }
  
  render () {
    return (
      <Modal className='thankyou' show={this.state.showModal} onHide={this.open} bsSize='sm'>
        <Modal.Body>
          <h2>Thank You</h2>
          <h4><strong>Better Life Vietnam</strong> would like to thank sir <a href='http://www.tobinjames.com'>Tobin James</a> for enable us to start this scholarship program.</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

module.exports = ShowMessage
