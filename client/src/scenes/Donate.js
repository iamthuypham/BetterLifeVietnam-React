const React = require('react')
const { FormGroup, FormControl, Button, Alert } = require('react-bootstrap')
const $ = require('jquery')

var client = require('braintree-web/client');
var hostedFields = require('braintree-web/hosted-fields');

import Footer from './Footer'

const newForm = (
  <form id="checkout-form" method="POST" action="/submitted" target="_blank">
      <div id="error-message"></div>
    
      <label htmlFor="card-number">Card Number</label>
      <div className="hosted-field" id="card-number"></div>
    
      <label htmlFor="cvv">CVV</label>
      <div className="hosted-field" id="cvv"></div>
    
      <label htmlFor="expiration-date">Expiration Date</label>
      <div className="hosted-field" id="expiration-date"></div>
    
      <input type="hidden" name="payment_method_nonce" />
      <input type="submit" value="Pay $10" disabled />
    </form>
  )

class CommentBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: '',
      stage: null,
      message: null
    }
  }
  generateToken() {
    $.ajax({
      url: '/donate',
      dataType: 'text',
      cache: false,
      success: function(data) {
        this.setState({token: data, stage: 'authorized'})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }
  loadForm() {
    var form = document.querySelector('#checkout-form');
    var submit = document.querySelector('input[type="submit"]');
    client.create({
      authorization: this.state.token
    }, function (clientErr, clientInstance) {
      if (clientErr) {
        console.log("ClientErr: "+ clientErr)
        return;
      }
      //load hosted fields
      hostedFields.create({
        client: clientInstance,
        styles: {
          'input': {
            'font-size': '14pt'
          },
          'input.invalid': {
            'color': 'red'
          },
          'input.valid': {
            'color': 'green'
          }
        },
        fields: {
          number: {
            selector: '#card-number',
            placeholder: '4111 1111 1111 1111'
          },
          cvv: {
            selector: '#cvv',
            placeholder: '123'
          },
          expirationDate: {
            selector: '#expiration-date',
            placeholder: '10/2019'
          }
        }
      }, function (hostedFieldsErr, hostedFieldsInstance) {
        if (hostedFieldsErr) {
          console.log(hostedFieldsErr)
          // Handle error in Hosted Fields creation
          return;
        }
    
        submit.removeAttribute('disabled');
    
        form.addEventListener('submit', function (event) {
          event.preventDefault();
    
          hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
            if (tokenizeErr) {
              console.log(tokenizeErr)
              // Handle error in Hosted Fields tokenization
              return;
            }
            document.querySelector('input[name="payment_method_nonce"]').value = payload.nonce;
            form.submit();
            this.setState({stage : 'submitted'})
          }.bind(this));
        }.bind(this), false);
      }.bind(this))
    }.bind(this))
  }
  
  loadResultAfterSubmission() {
    $.ajax({
      url: '/submitted',
      // dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.setState({message: data, stage: 'success'})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });

  }
  componentDidMount() {
  }
  render() {
    if(!this.state.stage){
      this.generateToken()
    } else if (this.state.stage === 'authorized' && this.state.token) {
      this.loadForm();
    } else if (this.state.stage === 'submitted') {
      this.loadResultAfterSubmission();
    }
    return (
      <div>
        { (this.state.stage === 'success' && this.state.message) ? (
          <Alert bsStyle="warning">
            <strong>{this.state.message}</strong>
          </Alert>
        ) : ""
        }
        { newForm }
        <Footer />
      </div>
    );
  }
}

module.exports = CommentBox
