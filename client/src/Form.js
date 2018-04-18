import React, { Component } from 'react';
import { FormErrors } from './FormErrors.js';
import validator from 'validator';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      currency: '',
      amount: '',
      cardHolderName: '',
      cardNo: '',
      cardExpiry: '',
      cardCCV: '',
      formErrors: {
        name: '',
        phone: '',
        currency: '',
        amount: '',
        cardHolderName: '',
        cardNo: '',
        cardExpiry: '',
        cardCCV: ''
      },
      nameValid: false,
      phoneValid: false,
      currencyValid: false,
      priceValid: false,
      cardHolderNameValid: false,
      cardNoValid: false,
      cardExpiryMonthValid: false,
      cardExpiryYearValid: false,
      cardCCVValid: false,
      formValid: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name,
          value = e.target.value;
    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors,
        nameValid             = this.state.nameValid,
        phoneValid            = this.state.phoneValid,
        priceValid            = this.state.priceValid,
        cardHolderNameValid   = this.state.cardHolderNameValid,
        cardNoValid           = this.state.cardNoValid,
        cardExpiryMonthValid  = this.state.cardExpiryMonthValid,
        cardExpiryYearValid   = this.state.cardExpiryYearValid,
        cardCCVValid          = this.state.cardCCVValid

    switch(fieldName) {
      case 'name':
        nameValid = validator.isAlpha(value);
        fieldValidationErrors.name = !nameValid && ' is invalid';
        break;
      case 'phone':
        phoneValid = validator.isMobilePhone(value);
        fieldValidationErrors.phone = !phoneValid && ' is invalid';
        break;
      case 'price':
        priceValid = validator.isCurrency(value);
        fieldValidationErrors.price = !priceValid && ' is invalid';
        break;
      case 'cardHolderName':
        cardHolderNameValid = validator.isAlpha(value);
        fieldValidationErrors.cardHolderName = !cardHolderNameValid && ' is invalid';
        break;
      case 'cardNo':
        cardNoValid = validator.isAlpha(value);
        fieldValidationErrors.cardNo = !cardNoValid && ' is invalid';
        break;
      case 'cardExpiryMonth':
        cardExpiryMonthValid = validator.isInt(value, {min: 1, max: 12, allow_leading_zeroes: true}) && value.length == 2;
        fieldValidationErrors.cardExpiryMonth = !cardExpiryMonthValid && ' is invalid';
        break;
      case 'cardExpiryYear':
        cardExpiryYearValid = validator.isInt(value, {min: 1, max: 99, allow_leading_zeroes: true}) && value.length == 2;
        fieldValidationErrors.cardExpiryYear = !cardExpiryYearValid && ' is invalid';
        break;
      case 'cardCCV':
        cardCCVValid = validator.isInt(value, {min: 1, max: 999, allow_leading_zeroes: true});
        fieldValidationErrors.cardCCV = cardCCVValid ? '': ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors:          fieldValidationErrors,
      nameValid:           nameValid,
      phoneValid:          phoneValid,
      priceValid:          priceValid,
      cardHolderNameValid: cardHolderNameValid,
      cardNoValid:         cardNoValid,
      cardExpiryMonthValid:cardExpiryMonthValid,
      cardExpiryYearValid: cardExpiryYearValid,
      cardCCVValid:        cardCCVValid
    }, this.validateForm);
  }

  validateForm() {
      this.setState({formValid: this.state.nameValid && this.state.phoneValid});
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
         <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={ `form-group
                       ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Customer Name</label>
          <input type="name" className="form-control"
            name="name" value={this.state.name}
            onChange={this.handleUserInput}
          />
        </div>
        <div className={`form-group
                       ${this.errorClass(this.state.formErrors.phone)}`}>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" className="form-control"
            name="phone" value={this.state.phone}
            onChange={this.handleUserInput}
          />
        </div>
        { /* Currency Type HKD, USD, AUD, EUR, JPY, CNY */ }
        <button type="submit" className="btn btn-primary"
                disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}
export default Form;
