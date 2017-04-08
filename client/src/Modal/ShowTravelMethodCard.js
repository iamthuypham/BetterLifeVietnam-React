const React = require('react')
const ReactDOM = require('react-dom')

import { Col, Overlay} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import '../Modal/ShowTravelMethodCard.css'

const PopoverBottom = React.createClass({
  render() {
    return (
      <div className="overlay">
        <div id="popover-positioned-scrolling-bottom" >
          <Col xs={0} md={5} className="popoverImgCol">
            <img src={process.env.PUBLIC_URL + '/images/transitImg/' + this.props.img}></img>
          </Col>
          <Col xs={12} md={7} className="popoverDetailCol">
            <div>
              <p className="methodDetail"></p>
              <p className="methodDetail"></p>
            </div>
          </Col>
        </div>
      </div>
    )
  }
})

class showTravelMethodCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      targetCardId: '',
      show: false
    }
    this.selectCard = this.selectCard.bind(this)
    this.resetContent = this.resetContent.bind(this)
  }
  selectCard(){
    this.setState({ show: true, targetCardId: this.props.id})
  }
  resetContent() {
    this.props.handleHeight(this.state.show)
    var targetId = "methodCard"+this.state.targetCardId
      var detailMethodElement = document.getElementById(targetId).parentElement.nextElementSibling
      var methodDetail1 = detailMethodElement.getElementsByClassName("methodDetail")[0]
      var methodDetail2 = detailMethodElement.getElementsByClassName("methodDetail")[1]
      methodDetail1.innerHTML = ""
      methodDetail2.innerHTML = ""
  }
  handleClick() {
    this.props.handleHeight(this.state.show)
    if (this.state.targetCardId === this.props.id) {
      var targetId = "methodCard"+this.state.targetCardId
      var detailMethodElement = document.getElementById(targetId).parentElement.nextElementSibling
      var methodDetail1 = detailMethodElement.getElementsByClassName("methodDetail")[0]
      var methodDetail2 = detailMethodElement.getElementsByClassName("methodDetail")[1]
      
      if ( methodDetail1 && methodDetail2) {
        methodDetail1.innerHTML = this.props.detail1
        methodDetail2.innerHTML = this.props.detail2
      }
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render () {
    return (
      <div>
      <Col xs={12} md={4}>
        <div className="methodCard" id={"methodCard"+this.props.id} onClick={this.selectCard} ref="target">
          <FontAwesome name={this.props.icon+' fa-5x'}/>
          <h3>{this.props.name}</h3>
          <div className="methodInfoShort lastLine">
            <p style={{textAlign: 'center'}}>{this.props.detail1}</p>
          </div>
        </div>
      </Col>
      <Overlay container={this} onHide={() => this.setState({ show: false })} show={this.state.show}  placement="bottom" target={() => ReactDOM.findDOMNode(this.refs.target)} rootClose={true} onEntered={this.handleClick} onExit={this.resetContent}>
        <PopoverBottom img={this.props.img}/>
      </Overlay>
      </div>
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
