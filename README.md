# payment-gateway-exercise

Setup Up instruction:
1. Clone into local machine
2. At sample folder copy hidden file `env` to root directory and rename
   as `.env`
3. At root directory & client folder type `yarn install` (should be able
   to work task runner like Gulp)
4. Start MongoDB server
5. At root directory type `yarn dev`;
6. Server should work

Sorry to tell the application is not working yet. Things has been done as follow:
1. Create payment form
2. Credit card number, expiration date & CVV number validation
3. Card Type showes up when inputting credit card number
4. Server end connection with MongoDB
5. Set up customer schema

Reflection:
Spent too much time on researching react form validation (changed 3-4
different packages) and braintree integration. Took some time to train up
stateless & container components practices.

Took much longer time than expected but am confident to work out a
usable application. Usability Test required.

Data Structure:
  Model: Customer
    name:        String,
    phoneNumber: String,
    payments: [{
      refCode: Number,
      currency: String,
      price: Number,
      cardHolderName: String,
      cardNumber: Number,
      // Expiration & Security Code should be in hashes
      cardExpiration: { month: Number, year: Number },
      cvv: Number
    }]
