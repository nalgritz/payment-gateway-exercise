import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  name,
  formalName,
  onChange,
  onBlur,
  value,
  placeHolder,
  fieldError
}) => (
  <div className='form-group'>
    <label>{formalName}</label>
    <input name={name}
           className='form-control'
           type='text'
           onChange={onChange}
           onBlur={onBlur}
           value={value}
           placeholder={placeHolder} />
    { fieldError && <span class='error'> aaaaa </span> }
  </div>
)

Field.propTypes = {
  name:        PropTypes.string.isRequired,
  formalName:  PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value:       PropTypes.string,
  onChange:    PropTypes.func.isRequired,
  onBlur:      PropTypes.func.isRequired,
  fieldError:  PropTypes.string
}

export default Field;
