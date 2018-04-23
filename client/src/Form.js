import React from 'react';

const Form = (props) => (
  <form id="payment-form" onSubmit={props.handleSubmit}>
    <div className='form-group'>
      <label>Customer Name</label>
      <input name="customerName"
             className='form-control'
             type="text"
             onChange={props.onChangeCustomerName}
             onBlur={props.onBlurCustomerName}
             value={props.customerName}
             placeholder="Customer Name" />
      { props.customerNameError && <span class="error">{ props.customerNameError }</span> }
    </div>
    <div className='form-group'>
      <label>Phone Number</label>
      <input name="phoneNumber"
             type="text"
             className='form-control'
             onChange={props.onChangePhoneNumber}
             onBlur={props.onBlurPhoneNumber}
             value={props.phoneNumber}
             placeholder="Phone Number" />
      { props.phoneNumberError && <span class="error">{ props.phoneNumberError }</span> }
    </div>
    <div className='form-group'>
      <select className='form-control'>
        { ['HKD', 'USD', 'AUD', 'EUR', 'JPY', 'CNY'].map( (currency, i) => {
          return <option key={i} value={ currency }>{ currency }</option>
        })}
      </select>
      <input name="price"
             type="text"
             className='form-control'
             onChange={props.onChangePrice}
             onBlur={props.onBlurPrice}
             value={props.price}
             placeholder="e.g. 200" />
      { props.priceError && <span class="error">{ props.priceError }</span> }
    </div>
    <div className='form-group'>
      <label>Credit Card Holder Name</label>
      <input name="cardHolderName"
             type="text"
             className='form-control'
             onChange={props.onChangeCardHolderName}
             onBlur={props.onBlurCardHolderName}
             value={props.cardHolderName}
             placeholder="e.g. John Doe" />
      { props.cardHolderNameError && <span class="error">{ props.cardHolderNameError }</span> }
    </div>
    <div className='form-group'>
      <label>Credit Card Number</label>
      <input name="cardNumber"
             type="text"
             className='form-control'
             onChange={props.onChangeCardNumber}
             onBlur={props.onBlurCardNumber}
             value={props.cardNumber}
             placeholder="Number in 16 digits" />
      { props.cardNumberError && <span class="error">{ props.cardNumberError }</span> }
    </div>
    <div className='form-group'>
      <label>Credit Card Expiration</label>
      <input name="cardExpiration"
             type="text"
             className='form-control'
             onChange={props.onChangeCardExpiration}
             onBlur={props.onBlurCardExpiration}
             value={props.cardExpiration}
             placeholder="DD/YY, e.g. 05/18" />
      { props.cardExpirationError && <span class="error">{ props.cardExpirationError }</span> }
    </div>
    <div className='form-group'>
      <label>Security Code</label>
      <input name="cvv"
             type="text"
             className='form-control'
             onChange={props.onChangeCvv}
             onBlur={props.onBlurCvv}
             value={props.cvv}
             placeholder="last 3 digits at the back" />
      { props.cvvError && <span class="error">{ props.cvvError }</span> }
    </div>

    <input type="submit" value="Pay" disabled/>
  </form>
)

export default Form;
