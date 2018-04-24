import React from 'react';
import Field from './Field';
import PropTypes from 'prop-types';

const Form = ({
  props,
  handleSubmit,
  onChangeField,
  onBlurField
}) => (
  <form id="payment-form" onSubmit={handleSubmit}>
    <Field name='customerName'
           formalName='Customer Name'
           placeHolder='Customer Name'
           value={props.customerName}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.customerNameError} />

    <Field name='phoneNumber'
           formalName='Phone Number'
           placeHolder='Phone Number'
           value={props.phoneNumber}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.phoneNumberError} />

    <div className='form-group'>
      <select name='currency'
              className='form-control'
              value={props.currency}
              onChange={onChangeField}>
        { ['HKD', 'USD', 'AUD', 'EUR', 'JPY', 'CNY'].map( (currency, i) => {
          return <option key={i} value={currency}>{currency}</option>
        })}
      </select>
    </div>

    <Field name='price'
           formalName='Price'
           placeHolder="e.g. 200"
           value={props.price}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.priceError} />

    <Field name='cardHolderName'
           formalName='Credit Card Holder Name'
           placeHolder="e.g. John Doe"
           value={props.cardHolderName}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.cardHolderNameError} />

    <Field name='cardNumber'
           formalName='Credit Card Number'
           placeHolder='Number in 16 digits'
           value={props.cardNumber}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.cardNumberError} />

    <Field name='cardExpiration'
           formalName='Card Expiration'
           placeHolder='DD/YY, e.g. 05/18'
           value={props.cardExpiration}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.cardExpiration} />

    <Field name='cvv'
           formalName='Security Code'
           placeHolder='Last 3 digits at the back'
           value={props.cvv}
           onChange={onChangeField}
           onBlur={onBlurField}
           fieldError={props.formError.cvvError} />

    <input type="submit" className="btn btn-default" value={ props.cardType ? `Pay with ${props.cardType}` : 'Submit' }/>
  </form>
)

Form.propTypes = {
  props:         PropTypes.shape({
    customerName:   PropTypes.string,
    phoneNumber:    PropTypes.string,
    currency:       PropTypes.string,
    price:          PropTypes.string,
    cardHolderName: PropTypes.string,
    cardNumber:     PropTypes.string,
    cardExpiration: PropTypes.string,
    cvv:            PropTypes.string,
    cardType:       PropTypes.string
  }),
  handleSubmit:  PropTypes.func.isRequired,
  onChangeField: PropTypes.func.isRequired,
  onBlurField:   PropTypes.func.isRequired,
  formError:     PropTypes.object
}

export default Form;
