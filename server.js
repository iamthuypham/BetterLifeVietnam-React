const express = require('express');
const fs = require('fs');
const app = express();
var bodyParser = require('body-parser');
var braintree = require("braintree");
const util = require('util')

app.set('port', (3001));
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.set('port', (process.env.PORT || 3001));
  app.use(express.static('client/build'));
}

app.use(bodyParser.urlencoded({ extended: true })); 

//Braintree API
var gateway = braintree.connect({
  environment:  braintree.Environment.Sandbox,
  merchantId:   '54ryc7z45wdwpqmh',
  publicKey:    't7kmx3j7wthxhr2m',
  privateKey:   'b3aa5ca6ca58fad5cc3cdaca9b3d795a'
});
  
app.get("/donate", function (req, res) {
  var clientToken = '';
  gateway.clientToken.generate({}, function (err, response) {
    clientToken = response.clientToken
    res.send(clientToken);
  });
});

app.post("/submitted", function (req, res) {
  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: req.body.payment_method_nonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
      if (result) {
        if (!result.success){
          var resultErrors = result.errors.deepErrors();
          res.send(resultErrors);
        } else {
          console.log("ID is: " + result.transaction.id)
          res.send("Your donation has been submitted.");
        }
      } 
      else {
        res.send("Server Error: " + err + ". Please contact Development team.")
      }
    }
  )
})

app.get("/submitted", function (req, res) {
  gateway.transaction.sale({
    amount: "10.00",
    paymentMethodNonce: req,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    if (result) {
      if (!result.success){
        var resultErrors = result.errors.deepErrors();
        var errorList = []
        resultErrors.map(function(e){
          errorList.push(e.message)
        })
        res.send(errorList);
      } else {
        res.send(result.message);
      }
    }  
    else {
      res.send("Server Error: " + err + ". Please contact Development team.")
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
