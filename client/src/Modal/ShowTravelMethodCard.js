const React = require('react')
import { Col, OverlayTrigger, Popover } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import '../Modal/ShowTravelMethodCard.css'

const popoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom">
    <div>
      <p id="methodDetail1"></p>
      <p id="methodDetail2"></p>
    </div>
  </Popover>
);

class showTravelMethodCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      targetCardId: ''
    }
    this.selectCard = this.selectCard.bind(this)
    this.resetTargetCardId = this.resetTargetCardId.bind(this)
  }
  selectCard(){
    
    this.setState({ targetCardId: this.props.id})
  }
  resetTargetCardId(){
    this.setState({ targetCardId: ''})
  }
  handleClick() {
    console.log("TargetCardId" +this.state.targetCardId)
    console.log("PropsId" +this.props.id)
    if (this.state.targetCardId === this.props.id && document.getElementById("methodDetail1") && document.getElementById("methodDetail2")) {
      console.log(this.props)
      document.getElementById("methodDetail1").innerHTML = this.props.detail1
      document.getElementById("methodDetail2").innerHTMl = this.props.detail2
    }
    this.resetTargetCardId()
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }
  render () {
    return (
      <Col xs={12} md={4}>
        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
          <div className="methodCard" onClick={this.selectCard}>
            <FontAwesome name={this.props.img+' fa-5x'}/>
            <h3>{this.props.name}</h3>
            <div className="methodInfoShort lastLine">
              <p style={{textAlign: 'center'}}>{this.props.detail1}</p>
            </div>
          </div>
        </OverlayTrigger>
      </Col>
    )
  }
}

const { string } = React.PropTypes

showTravelMethodCard.propTypes = {
  name: string.isRequired,
  detail1: string,
  detail2: string,
  // img: string.isRequired
}

module.exports = showTravelMethodCard
