import React from 'react';
import FormControl from './FormControl';
import PropTypes from 'prop-types';

const EmailField = (props) => (
  <FormControl 
    htmlFor="email"
    label="Email"
    type="email" 
    className="form-control" 
    placeholder="Enter Your Email" 
    onChange={props.onChange} 
    value={props.email}
    error={props.error}
  />
);

EmailField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string,
  email : PropTypes.string.isRequired
} 

export default EmailField;