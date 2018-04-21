const express = require('express'),
      env = require('dotenv').config(),

      app = express(),
      port = process.env.PORT || 5000,
      Gateway = require('./server/config/braintree.js').gateway;

require('./server/api/routes.js')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
