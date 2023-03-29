var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'javidahamedm_ai@mepcoeng.ac.in',
    pass: '51198ahamed'
  }
});

var mailOptions = {
  from: 'javidahamedm_ai@mepcoeng.ac.in',
  to: 'kumaranaakash_ai@mepcoeng.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'Heloo bro!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});