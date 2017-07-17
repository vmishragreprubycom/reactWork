import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const EmailField = (props) => (
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <Input 
      type="email" 
      placeholder="Enter email" 
      className="form-control"
      onChange={props.onChange} 
      value={props.email}
    />
    <div className="text-danger">
      {props.error}
    </div>
  </div>
);

EmailField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string,
  email : PropTypes.string.isRequired
} 

export default EmailField;