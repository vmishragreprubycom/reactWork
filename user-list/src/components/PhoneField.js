import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const PhoneField = (props) => (
  <div className="form-group">
    <label htmlFor="phone">Phone:</label>
    <Input 
      type="number" 
      className="form-control" 
      placeholder="Enter phone no" 
      onChange={props.onChange} 
      value={props.phone}
    />
    <div className="text-danger">
      {props.error}
    </div>
  </div>
);

PhoneField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string,
  phone : PropTypes.string.isRequired
} 

export default PhoneField;