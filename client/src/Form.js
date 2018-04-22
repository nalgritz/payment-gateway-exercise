import client  from 'braintree-web/client';
import hostedFields from 'braintree-web/hosted-fields';
import React, { Component } from 'react';

export default class Form extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  onFieldChange(e) {
  }

  onFieldFocus(e) {
  }

  handleSubmit(e) {
    client.create({ authorization: 'sandbox_psy3kmhq_bkkx6' })
          .then((err, client) => {
            let stylesConfig = {
                  'input': {
                    'font-size': '16pt',
                    'color': '#3A3A3A'
                  },

                  '.number': {
                    'font-family': 'monospace'
                  },
                  '.valid': {
                    'color': 'green'
                  }
                }, fieldsConfig = {
                  number: {
                    selector: '#card-number'
                  },
                  cvv: {
                    selector: '#cvv'
                  },
                  expirationDate: {
                    selector: '#expiration-date'
                  }
                }
            return hostedFields.create({
              client: client,
              styles: stylesConfig,
              fields: fieldsConfig
            })
          })
          .then((hostedFields) => {
            e.preventDefault();
            e.target.setAttribute('disabled', 'disabled');

            hostedFields.tokenize().then((payload) => {
              // send payload.nonce to your server
            }).catch((err) => {
              e.target.removeAttribute('disabled');
              console.error(err);
            })
          });
  }

  showError(e) {
  }

  hideError(e) {
  }

  render() {
    return (
      <form action="/" id="payment-form" onClick={this.handleSubmit}>
        <input type="hidden" name="payment_method_nonce" />
        <div className="form-group">
          <label>Card Number</label>
          <div id="card-number" className="form-control"></div>
        </div>

        <div className="form-group">
          <label>CVV</label>
          <div id="cvv" className="form-control"></div>
        </div>

        <div className="form-group">
          <label>Expiration Date</label>
          <div id="expiration-date" className="form-control"></div>
        </div>

        <input id="my-submit" type="submit" value="Pay" disabled/>
      </form>
    )
  }
}
