const React = require('react')
  // const { FormGroup, FormControl, Button } = require('react-bootstrap')
  // const $ = require('jquery')
  // import './CommentBox.css'
import Footer from './Footer'

class Contact extends React.Component {
  componentDidMount() {
    (function() {
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
    })()
  }
  render() {
  return (
    <div>
      <div className="typeform-widget" data-url="https://blvdevelopmentteam.typeform.com/to/cbGYo0" style={{width: "100%", height: "500px"}}></div>
      <Footer />
    </div>
  )}
}
module.exports = Contact