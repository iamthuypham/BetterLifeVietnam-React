const express = require('express');
const fs = require('fs');
const sqlite = require('sql.js');

const filebuffer = fs.readFileSync('db/usda-nnd.sqlite3');

const db = new sqlite.Database(filebuffer);

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const COLUMNS = [
  'carbohydrate_g',
  'protein_g',
  'fa_sat_g',
  'fa_mono_g',
  'fa_poly_g',
  'kcal',
  'description',
];
app.get('/api/food', (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: 'Missing required parameter `q`',
    });
    return;
  }

  // WARNING: Not for production use! The following statement
  // is not protected against SQL injections.
  const r = db.exec(`
    select ${COLUMNS.join(', ')} from entries
    where description like '%${param}%'
    limit 100
  `);

  if (r[0]) {
    res.json(
      r[0].values.map((entry) => {
        const e = {};
        COLUMNS.forEach((c, idx) => {
          // combine fat columns
          if (c.match(/^fa_/)) {
            e.fat_g = e.fat_g || 0.0;
            e.fat_g = (
              parseFloat(e.fat_g, 10) + parseFloat(entry[idx], 10)
            ).toFixed(2);
          } else {
            e[c] = entry[idx];
          }
        });
        return e;
      })
    );
  } else {
    res.json([]);
  }
});

var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Sending Email when user request /contactUs
console.log('Execute Nodemailer')
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})
var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'dev.betterlifevietnam@gmail.com',
    pass: 'ThinhNguyen'
  }
}
var transporter = nodemailer.createTransport('smtps://' + smtpConfig.auth.user + ':' + smtpConfig.auth.pass + '@smtp.gmail.com')

var comments = [];

app.get('/api/comments', function(req, res) {
  res.send(comments);
});
app.post('/api/comments', function (req, res) {
    // setup e-mail data
  var mailOptions = {
    from: 'BLV Development Member <dev.betterlifevietnam@gmail.com>', // sender address
    to: ['phamrosalind@gmail.com','dev.betterlifevietnam@gmail.com'], // list of receivers
    subject: 'New BLV Contact from '+ req.body.name, // Subject line
    text: req.body.message, // plaintext body
    html: '<h4> Name: '+req.body.name+'</h4><h4>Email: '+req.body.email+'</h4><h4>Message: "'+ req.body.message +'"</h4>' // html body
  
}
    // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    var errorToComment = 'Oh no! Something went wrong. Please email us directly at betterlifevietnam@gmail.com'
    if (error) {
      comments.push(errorToComment)
      return console.log('Transporter Error: '+ error)
    }
    console.log('Message sent: ' + info.response)
    res.send(comments)
  })
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
