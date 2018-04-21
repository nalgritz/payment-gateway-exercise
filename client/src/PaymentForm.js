import Form   from 'react-validation/build/form';
import Input  from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import Button from 'react-validation/build/button';
import { required, number, mobileNumber, limit } from './PaymentFormValidation.js';
import React, { Component } from 'react';

export default class PaymentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      currency: '',
      price: '',
      cardHolderName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCCV: '',
      formValid: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Emulate async API call
    setTimeout(() => {
      this.form.showError(this.userInput, <span>API error</span>);
    }, 1000);
  }

  removeApiError = () => {
    this.form.hideError(this.userInput);
  }

  render() {
    return (
      <Form className="payment-form" ref={c => { this.form = c }} onSubmit={ this.handleSubmit }>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Customer Info</h2>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                placeholder="Customer Name"
                value={this.state.name}
                name='name'
                validations={[required]} />
            </div>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                placeholder="Phone Number"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.phoneNumber}
                name='phoneNumber'
                validations={[required, mobileNumber]} />
            </div>
            <div className='form-group'>
              <Select name='currency' className='form-control' value={this.state.currency} validations={[required]}>
                { ['HKD', 'USD', 'AUD', 'EUR', 'JPY', 'CNY'].map( (currency, i) => {
                  return <option key={i} value={ currency }>{ currency }</option>
                })}
              </Select>
              <Input
                type='text'
                className='form-control'
                placeholder="Price"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.price}
                name='price'
                validations={[required, number]} />
            </div>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-sm-12 col-md-6 center">
            <h2>Payment Info</h2>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                placeholder="Credit Card Holder Name"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.cardHolderName}
                name='cardHolderName'
                validations={[required]} />
            </div>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                placeholder="Credit Card Number"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.cardNumber}
                name='cardNumber'
                length="16"
                validations={[required, number, limit]} />
            </div>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                placeholder="Credit Card Expiry Date (MMYY)"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.cardExpiry}
                name='cardExpiry'
                length="4"
                validations={[required, limit]} />
            </div>
            <div className='form-group'>
              <Input
                type='text'
                className='form-control'
                placeholder="CCV"
                onFocus={this.removeApiError}
                ref={c => { this.userInput = c }}
                value={this.state.cardCCV}
                name='cardCCV'
                length="3"
                validations={[required, number, limit]} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Button className="btn btn-primary" disabled={!false}> Submit</Button>
          </div>
        </div>
      </Form>
    )
  }
}
