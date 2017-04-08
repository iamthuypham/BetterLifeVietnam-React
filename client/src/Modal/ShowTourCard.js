const React = require('react')
import { Col, Thumbnail } from 'react-bootstrap'

import '../Modal/ShowTourCard.css'

class ShowTourCard extends React.Component {
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
          <div className="tourCard">
            <Thumbnail src={process.env.PUBLIC_URL + '/images/toursImg/' + this.props.img}>
              <h3 style={{ color: 'white' }}>{this.props.name}</h3>
            </Thumbnail>
            <div className="tourInfo">
              <p>{this.props.detail1}</p>
            </div>
          </div>
        </Col>
      ) : (
        <Col xs={12} style={{minHeight: '300px'}}>
          <Col xs={12} sm={5} style={{padding:'0'}}>
            <div className='specialThumbnail'></div>
          </Col>
          <Col xs={12} sm={7} style={{padding:'0'}}>
            <div className="tourCard special">
              <h3 style={{ color: 'black' }}>{this.props.name}</h3>
              <div className="tourInfo" style={{ borderRigh: 'none', marginBottom: '0'}}>
                <p>{this.props.detail1}</p>
                <p>{this.props.detail2}</p>
                <ul>{attractionList}</ul>
              </div>
            </div>
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
  img: string.isRequired
}

module.exports = ShowTourCard
