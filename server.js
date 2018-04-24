const express = require('express'),
      env = require('dotenv').config(),

      app = express(),
      port = process.env.PORT || 5000;
      // Gateway = require('./server/config/braintree.js').gateway;

require('./server/config/mongoose.js');

// Routes
require('./server/api/routes.js')(app);
require('./server/controllers/paymentController.js');

// Gateway.clientToken.generate({
  // customerId: process.env.BT_CUSTOMERID
// })
  // .then( (response) => {
    // var clientToken = response.clientToken
    // console.log(clientToken)
    // return clientToken
  // })
  // .catch( (err) => { console.log(err); return err })

app.listen(port, () => console.log(`Listening on port ${port}`));
