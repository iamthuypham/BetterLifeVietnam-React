const React = require('react')
import { Col } from 'react-bootstrap'
import Footer from './Footer'

class BLV_form extends React.Component {
  componentDidMount() {
    var qs, js, q, s, d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "widget.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q)
    }
  }
  render() {
  return (
    <div>
      <Col xs={12} sm={6} style={{padding: "0"}}>
        <div className="typeform-widget" data-url="https://blvdevelopmentteam.typeform.com/to/cbGYo0" style={{width: "100%", height: "500px"}}></div>
      </Col>
      <Col xs={12} sm={6} style={{padding: "0"}}>
        <div className="typeform-widget" data-url="https://blvdevelopmentteam.typeform.com/to/iwWkrc" style={{width: "100%", height: "500px"}}> </div> 
      </Col>
      <Footer />
    </div>
  )}
}
module.exports = BLV_form