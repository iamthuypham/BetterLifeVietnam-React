const React = require('react')
const { FormGroup, FormControl, Button, Alert } = require('react-bootstrap')
const $ = require('jquery')

var client = require('braintree-web/client');
var hostedFields = require('braintree-web/hosted-fields');

import Footer from './Footer'
import '../scenes/Donate.css'

const newForm = (
  <form id="checkout-form" method="POST" action="/submitted" target="message" >
      <div id="error-message"></div>
    
      <label htmlFor="card-number">Card Number</label>
      <div className="hosted-field" id="card-number"></div>
    
      <label htmlFor="cvv">CVV</label>
      <div className="hosted-field" id="cvv"></div>
    
      <label htmlFor="expiration-date">Expiration Date</label>
      <div className="hosted-field" id="expiration-date"></div>
      
      <div id="donateOption">
        <input type="submit" value="$20" />
        <input type="submit" value="$30" />
        <input type="submit" value="$50" />
      </div>
      
      <label htmlFor="custome-donate">Custom Donation</label>
      <div className="hosted-field" id="custom-donate"></div>
    
      <input type="hidden" name="payment_method_nonce" />
      <input id="submitButton" type="submit" value="Submit" disabled />
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
            'font-size': '14pt',
            'font-family': 'arial',
            'height': '100px',
          },
          'input.invalid': {
            'color': '#ff0000'
          },
          'input.valid': {
            'color': '#00ba5d'
          },
          ':focus': {
            'color': '#777'
          },
          
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
          },
          customDonate: {
            selector: '#custom-donate',
            placeholder: '$___'
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
  componentDidMount() {
    this.ifr.onload = () => {
      document.getElementById("targetAlert").innerHTML = this.ifr.contentWindow.document.getElementsByTagName("body")[0].innerHTML;
    }
  }
  render() {
    if(!this.state.stage){
      this.generateToken()
    } else if (this.state.stage === 'authorized' && this.state.token) {
      this.loadForm();
    } 
    return (
      <div className="container">
        <h3>Enter your payment detail</h3>
        <Alert id="targetAlert"></Alert>
        { newForm }
        <iframe name="message" id="alertMessage" hidden="true" ref={(f) => this.ifr = f}></iframe>
        <Footer />
      </div>
    );
  }
}

module.exports = CommentBox

//using ref attribute to access iframe
//then using componentDidMount to manipulate component