import validator from 'validator';
import React from 'react';

export const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'required';
  }
};

export const mobileNumber = (value, props) => {
  if (validator.isMobilePhone(value, 'any')) {
    return <span className="has-error"> This field should be a valid mobile numbers.</span>
  }
};

export const number = (value) => {
  if (validator.isNumeric(value)) {
    return <span className="has-error"> This field should only contain numbers.</span>
  }
};

export const limit = (value, props) => {
  if (value.toString().trim().length !== props.length) {
    return <span className="has-error"> This field must contain {props.length} digits.</span>
  }
};
