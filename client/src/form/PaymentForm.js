import valid from 'card-validator';
import React, { Component } from 'react';
import Form from './Form';

export default class PaymentForm extends Component {
  constructor() {
    super()
    this.state = {
      customerName: '',
      phoneNumber: '',
      currency: '',
      price: '',
      cardHolderName: '',
      cardNumber: '',
      cardExpiration: '',
      cvv: '',
      formError: {
        customerNameValid:   false,
        phoneNumberValid:    false,
        priceValid:          false,
        cardHolderValid:     false,
        cardNumberValid:     false,
        cardExpirationValid: false,
        cvvValid:            false
      },
      cardType: ''
    };
    this.handleSubmit  = this.handleSubmit.bind(this)
    this.onChangeField = this.onChangeField.bind(this)
    this.onBlurField   = this.onBlurField.bind(this)
  }

  handleSubmit(e) {
    const data = e.target,
          callApi = async () => {
            const response = await fetch('/api/payment/create', {
                                          method: 'POST',
                                          data: JSON.stringify(data)
                                        }),
                  body = await response.json();

            if (response.status === 200) throw Error(body.message)

            return body.message;
          }

    callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
  }

  onChangeField(e) {
    let target = e.target
    this.setState({ [target.name]: target.value }, () => {
      if (target.name === 'cardNumber') {
        let card = valid.number(target.value).card
        card && this.setState({ cardType: card.niceType })
      }
    })
  }

  onBlurField(e) {
    // Validation, if validation passes setState({ [fieldNameValid]: true })
    // customerName:   string,
    // phoneNumber:    number, // 8-digit numeric
    // currency:       string,
    // price:          number,
    // cardHolderName: string,
    // cardExpiration: string,
    // cardNumber:     number, // 16-digit numeric
    // cvv:            number // 3-digit numeric
  }

  render() {
    return <Form props={ this.state }
                 handleSubmit={ this.handleSubmit }
                 onChangeField={ this.onChangeField }
                 onBlurField={ this.onBlurField }
                 formError={ this.state.formError }
           />;
  }
}
