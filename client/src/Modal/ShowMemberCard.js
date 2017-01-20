const React = require('react')
import { Modal, Col, Thumbnail} from 'react-bootstrap'

class ShowMemberCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  open () {
    this.setState({
      showModal: true
    })
  }
  close () {
    this.setState({
      showModal: false
    })
  }

  render () {
    return (
      <Col xs={12} sm={4} style={{ maxHeight: '420px', maxWidth: '250px'}}>
        <Thumbnail src={process.env.PUBLIC_URL + '/images/membersImg/' + this.props.img} onClick={this.open}>
          <div onClick={this.open}>
            <h3 style={{ color: '#00ba5d', cursor: 'pointer' }}>{this.props.name}<h5 style={{textIndent: '0'}}>{this.props.position}</h5></h3>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title style={{color: '#00ba5d'}}>{this.props.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.props.info1}</p>
                <p>{this.props.info2}</p>
              </Modal.Body>
            </Modal>
          </div>
        </Thumbnail>
      </Col>
    )
  }
}

const { string } = React.PropTypes

ShowMemberCard.propTypes = {
  name: string.isRequired,
  position: string.isRequired,
  info1: string.isRequired,
  info2: string
}

module.exports = ShowMemberCard
