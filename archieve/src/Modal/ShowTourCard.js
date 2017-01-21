const React = require('react')
import { Modal, Col, Thumbnail } from 'react-bootstrap'

class ShowTourCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    showModal: false
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
    
    var attractionList = [];
    for (var i=0; i < this.props.attractions.length; i++){
      attractionList.push(<li>{ this.props.attractions[i] }</li>)
    }
    
    return (
      <Col xs={12} sm={6} md={4} style={{minHeight: '300px'}}>
        <Thumbnail src={process.env.PUBLIC_URL + '/images/toursImg/' + this.props.img} onClick={this.open}>
          <div onClick={this.open}>
            <h3 style={{ color: '#00ba5d', cursor: 'pointer' }}>{this.props.name}</h3>
              <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>{this.props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.props.detail1}</p>
                <p>{this.props.detail2}</p>
                <ul>{ attractionList }</ul>
              </Modal.Body>
            </Modal>
          </div>
        </Thumbnail>
      </Col>
    )
  }
}

const { string } = React.PropTypes

ShowTourCard.propTypes = {
  name: string.isRequired,
  detail1: string,
  detail2: string,
  attractions: string,
  img: string.isRequired
}

module.exports = ShowTourCard
