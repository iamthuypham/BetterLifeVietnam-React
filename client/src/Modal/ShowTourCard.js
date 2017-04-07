const React = require('react')
import { Modal, Col, Thumbnail } from 'react-bootstrap'

import '../Modal/ShowTourCard.css'

class ShowTourCard extends React.Component {
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
    var attractionList = []
    if (this.props.attractions){
      for (var i = 0; i < this.props.attractions.length; i++) {
        attractionList.push(<li>{ this.props.attractions[i] }</li>)
      }  
    }

    return (
      (!this.props.special)?
      (
        <Col xs={12} sm={6} md={4} style={{minHeight: '300px'}}>
          <div onClick={this.open} className="tourCard">
            <Thumbnail src={process.env.PUBLIC_URL + '/images/toursImg/' + this.props.img} onClick={this.open}>
              <h3 style={{ color: 'white' }}>{this.props.name}</h3>
            </Thumbnail>
            <div className="tourInfo">
              <p>{this.props.detail1}</p>
              <p>{this.props.detail2}</p>
            </div>
          </div>
        </Col>
      ) : (
        <Col xs={12} style={{minHeight: '300px'}}>
          <Col xs={12} sm={7} style={{padding:'0'}}>
            <div onClick={this.open} className="tourCard special">
              <h3 style={{ color: 'black' }}>{this.props.name}</h3>
              <div className="tourInfo" style={{ borderRight: 'none', marginBottom: '0'}}>
                <p>{this.props.detail1}</p>
                <p>{this.props.detail2}</p>
                <ul>{attractionList}</ul>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={5} style={{padding:'0'}}>
            <div className='specialThumbnail' onClick={this.open}></div>
          </Col>
        </Col>
      )
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

// , {
//         "name": "Custom Vietnam Tours",
//         "detail1": "Thank you for trusting Tours for Books and giving us a chance to be your companion on your trip to Southeast Asia. In addition to specific day tours and packages, we offer customized tours based on your interests and needs. We are delighted to abide by your wishes and make it come true.",
//         "detail2": "Please email toursforbooks@betterlifevietnam.org, and our tour consultants will reply back with advice and sample itineraries.",

//     }
