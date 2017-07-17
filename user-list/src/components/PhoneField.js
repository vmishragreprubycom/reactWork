import React from 'react';
import PropTypes from 'prop-types';
import FormControl from './FormControl';

const PhoneField = (props) => (
  <FormControl 
    htmlFor="phone"
    label="Phone"
    type="number" 
    className="form-control" 
    placeholder="Enter phone no" 
    onChange={props.onChange} 
    value={props.phone}
    error={props.error}
  />
);

PhoneField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string,
  phone : PropTypes.string.isRequired
} 

export default PhoneField;