var express = require('express');
var router = express.Router();

// designated payment page form
router.get('/payment', (req, res) => {
  res.send('New Payment');
})

router.get('/check_payment', (req, res) => {
  res.send('Get past payment info');
})

module.exports = router;
