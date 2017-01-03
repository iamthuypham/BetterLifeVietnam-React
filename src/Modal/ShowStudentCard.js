const React = require('react')
import { Modal, Col, Thumbnail} from 'react-bootstrap'

class ShowStudentCard extends React.Component {
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
    return (
      <Col xs={12} sm={4} style={{ maxHeight: '420px', maxWidth: '250px'}}>
        <Thumbnail src={process.env.PUBLIC_URL + '/images/studentsImg/' + this.props.img} onClick={this.open}>
          <div onClick={this.open}>
            <h3 style={{ color: '#00ba5d', cursor: 'pointer' }}>{this.props.name}<h5 style={{textIndent: '0'}}>{this.props.age} years old, {this.props.homeTown}</h5></h3>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>{this.props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Sponsored by {this.props.sponsor}</p>
                <p>{this.props.story}</p>
                <a href={this.props.link1}>Read More</a>
              </Modal.Body>
            </Modal>
          </div>
        </Thumbnail>
      </Col>
    )
  }
}

const { string } = React.PropTypes

ShowStudentCard.propTypes = {
  name: string.isRequired,
  age: string,
  homeTown: string,
  sponsor: string,
  story: string.isRequired,
  link1: string,
  img: string.isRequired
}

module.exports = ShowStudentCard
