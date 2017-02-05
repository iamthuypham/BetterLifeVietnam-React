const React = require('react')
const { FormGroup, FormControl, Button } = require('react-bootstrap')
const $ = require('jquery')
import './CommentBox.css'
import Footer from './Footer'

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/api/comments',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/comments', status, err.toString());
      }
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: '/api/comments',
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data, sent: true});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: comments, sent: false});
        console.error('/api/comments', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: [], sent: null};
  },
  componentDidMount: function() {
    // this.loadCommentsFromServer();
  },
  render: function() {
    let sentStatusResponse
    if (this.state.sent === null) {
      sentStatusResponse = (<h4></h4>);
    } else if (this.state.sent) {
      sentStatusResponse = (<h4>Thank you for contacting us! Our team member will contact you as soon as possible.</h4>)
    } else {
      sentStatusResponse = (<h4>Oh no! Something went wrong. Please email us directly at betterlifevietnam@gmail.com</h4>)
    }
    return (
      <div>
        <div className="commentBox container">
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          { sentStatusResponse }
          
        </div>
        <Footer />
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {name: '', email: '', message: ''};
  },
  getValidationState: function(e) {
    const length = this.state.email.length;
    var re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(this.state.email)
    if (valid && length > 0) return 'success';
    else if (!valid && length > 0) return 'warning';
    else if (length === 0) return null;
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handleMessageChange: function(e) {
    this.setState({message: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.state.name.trim();
    var email = this.state.email.trim();
    var message = this.state.message.trim();
    if (!email || !name || !message) {
      return;
    }
    this.props.onCommentSubmit({name: name, email: email, message: message});
    this.setState({name: '', email: '', message: ''});
  },
  render: function() {
    return (
      <div>
        <h1 className='addMargin'>Contact Us</h1>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.handleEmailChange}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <FormControl 
              componentClass="textarea" 
              value={this.state.message}
              placeholder="Your Message"
              onChange={this.handleMessageChange}
              rows="6"
            />
          </FormGroup>
          <div><Button type="submit" value="Send Email" style={{float: 'right'}}>Send</Button></div>
        </form>
      </div>
    );
  }
});

module.exports = CommentBox
