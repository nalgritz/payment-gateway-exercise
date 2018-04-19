import React, { Component } from 'react';

export const field = ({ name, fieldName, value}) => {
  return (
    <div className={ `form-group ${this.errorClass(this.state.formErrors[fieldName])}`}>
      <label htmlFor={ fieldName }>{ name }</label>
      <input type={ fieldName } className="form-control"
        name={ fieldName } value={value}
        onChange={this.handleUserInput}
      />
    </div>
  )
}
