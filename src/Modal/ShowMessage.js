const React = require('react')
import { Modal } from 'react-bootstrap'

class ShowMessage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: true,
      count: 7,
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
    clearInterval(this.state.timerId);
    this.setState({
      showModal: false
    })
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    var newCount = this.state.count -1;
    if(newCount >= 0) { 
      this.setState({ 
        count: newCount
      });
    } else {
      clearInterval(this.state.timerId);
      this.setState({ 
        showModal: false
      });
    }
  }
  
  render () {
    let messageModal
    messageModal = (
      <Modal className='thankyou' show={this.state.showModal} onHide={this.open} bsSize='sm'>
        <Modal.Header style={{borderBottom: 'none'}}>
          <button type='button' className='close' aria-label='Close'><span aria-hidden='true' onClick={this.close}>×</span></button>
          <h2>Thank You</h2>
        </Modal.Header>
        <Modal.Body>
          <h4><strong>Better Life Vietnam</strong> would like to thank sir <a href='http://www.tobinjames.com'>Tobin James</a> for enable us to start this scholarship program.</h4>
        </Modal.Body>
      </Modal>
      )
    return (
      <div>{ messageModal }</div>
    )
  }
}

module.exports = ShowMessage
