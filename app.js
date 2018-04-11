const express = require('express')

const app = express()
const port = 3000;

// allows us to process submitted form dals
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;
  var phone = req.body.user_phone;
  var pref = req.body.user_pref;
  var color = req.body.user_color;
  var date = req.body.user_date;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-mail: " + email);
  console.log("Phone:" + phone);
  console.log("Prefered Method:" + pref)

  res.send(
    `
    <h1>Thanks ${name}!</h1>
    <p>We received your message below on ${date}, and will get back to you at <strong>${email}</strong>. Or will call at <strong>${phone}</strong></p>
    <p>My favorite color is also <strong>${color}</strong>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);