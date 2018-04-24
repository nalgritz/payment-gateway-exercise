module.exports = (app) => {
  let Customer = require('../models/customer');

  // Payment creation route
  app.post('/api/payment/create', (req, res) => {
    // const data = req.body
    //
    // if (data.cardType === 'AMEX' || data.currency !== 'HKD') {
    //    // Get gateway A profile
    //    // Create customer token and proceed
    // } else {
    //    // Get gateway B profile
    //    // proceed using gateway B
    // }
    //
    // let c = new Customer,
    //     c.name = data.customerName,
    //     c.phoneNumber = data.phoneNumber,
    //     paymentInfo = {
    //       refCode: '', // random generated 6-digit hash
    //       currency: data.currency,
    //       price: data.price,
    //       cardHolderName: data.cardHolderName,
    //       cardNumber: data.cardNumber,
    //       cardExpiration: { month: data.cardExpiration.month, year: data.cardExpiration.year },
    //       cvv: data.cvv
    //     };
    //  c.payments.push(paymentInfo)
    //  c.save(() => {
    //    res.send('Payment is successfully proceeded')
    //  })
  });

  // Check payment route
  app.get('/api/payment/check', (req, res) => {
    // const data = req.body,
    // result = Customer.findOne({
      // 'customerName': data.customerName,
      // 'paymentInfo.refCode': data.refCode
    // }, 'customerName phoneNumber paymentInfo.currency paymentInfo.price', (err, customer) =>  {
        // if (err) return handleError(err);
    // });
    // res.send(result.json());
  })

  // app.get("/api/client_token", function (req, res) {
    // gateway.clientToken.generate({}, function (err, response) {
      // res.send({ express: response.clientToken});
    // });
  // });
}
