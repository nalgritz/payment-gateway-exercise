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
      cvv: ''
    };
  }

  componentDidMount() {
  }

  handleSubmit(e) {
  }

  onChangeCustomerName(e) {
  }

  onBlurCustomerName(e) {
  }

  onChangePhoneNumber(e) {
  }

  onBlurPhoneNumber(e) {
  }

  onChangePrice(e) {
  }

  onBlurPrice(e) {
  }

  onChangeCardHolderName(e) {
  }

  onBlurCardHolderName(e) {
  }

  onChangeCardNumber(e) {
  }

  onBlurCardNumber(e) {
  }

  onChangeCardExpiration(e) {
  }

  onBlurCardExpiration(e) {
  }

  onChangeCvv(e) {
  }

  onBlurCvv(e) {
  }

  render() {
    return <Form props={
                   this.stats,
                   this.handleSubmit,
                   this.onChangeCustomerName,
                   this.onBlurCustomerName,
                   this.onChangePhoneNumber,
                   this.onBlurPhoneNumber,
                   this.onChangePrice,
                   this.onBlurPrice,
                   this.onChangeCardHolderName,
                   this.onBlurCardHolderName,
                   this.onChangeCardNumber,
                   this.onBlurCardNumber,
                   this.onChangeCardExpiration,
                   this.onBlurCardExpiration,
                   this.onChangeCvv,
                   this.onBlurCvv
           } />;
  }
}
