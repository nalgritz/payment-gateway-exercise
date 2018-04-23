module.exports = (app) => {
  app.get('/api/payment/create', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  // app.get("/api/client_token", function (req, res) {
    // gateway.clientToken.generate({}, function (err, response) {
      // res.send({ express: response.clientToken});
    // });
  // });

  app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
}
