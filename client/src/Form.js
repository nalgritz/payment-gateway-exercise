import React, { Component } from 'react';
import { FormErrors } from './FormErrors.js';
import validator from 'validator';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
                   email: '',
                   password: '',
                   formErrors: {email: '', password: ''},
                   emailValid: false,
                   passwordValid: false,
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
        emailValid            = this.state.emailValid,
        passwordValid         = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = validator.isEmail(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }

    this.setState({formErrors:     fieldValidationErrors,
                    emailValid:    emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
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
                       ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control"
            name="email" value={this.state.email}
            onChange={this.handleUserInput}
          />
        </div>
        <div className={`form-group
                       ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control"
            name="password" value={this.state.password}
            onChange={this.handleUserInput}
          />
        </div>
        <button type="submit" className="btn btn-primary"
                disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }
}
export default Form;
