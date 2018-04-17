# payment-gateway-exercise

Resources:
  Paypal API
  BrainTree
  Redis


Create Payment:
  React Form:
    a. Order Section
      i. Customer Name
      ii. Customer Phone Number
      iii. Currency (HKD, USD, AUD, EUR, JPY, CNY)
      iv. Price
    b. Payment Section
      i. Credit card holder name
      ii. Credit card number
      iii. Credit card expiration
      iv. Credit card CCV
    c. Submit Button

  Before form submission:
  ALL form validation;

  After form submission, return:

  2 gateway objects: A & B
  GatewayA: card: AMEX; Currencies: USD, AUD, EUR, JPY, CNY
  GatewayB: HKD

  Back-end:
    Save to DB
    Send using BrainTree API (process in nonce)
    return response from payment gateway to database table # doubt? OR memory
cache 

  Front-end:
    Error or Success (as lightbox/notification)


Check Payment:
  React Form:
    Customer Name
    Reference code

  If success, return:
    Customer Name
    Customer Phone Number
    Currency
    Price
  If fail, return:
    'Record Not Found' Message





Check Payment
6. Create a Payment Checking Form​ to check the payment record by
   Customer name,
and payment reference code. If success, show Customer Name, Customer
Phone
Number, Currency and Price. If failed, show Lightbox of Record No Found
Message
7. The record should get from memory caching instead of database

Hints for Bonus
1. Consider cache may expired when check order record;
2. Consider how to guarantee payment record are found in your cache /
   database​ and payment gateway;
3. Consider how to add additional payment gateways;

Specification
1. Use either PHP or NodeJS​ and MVC framework that is your
   favorites.
2. Don’t bother with any fancy UI, just use UI Framework such as
   Bootstrap
3. You can use React JS/ Angular JS / jQuery for form validation.
4. Use only redis for memory caching​ &
5. Use any database engine for persistent​ is a must
6. No need to store the credit card information unless you really want
   to try.
7. The code needs to work after we clone it and try it (no bugs) and
   should process the payments.
8. Please prepare the document for the data structure and detail setup
   instruction or/and publicly accessible URL.
