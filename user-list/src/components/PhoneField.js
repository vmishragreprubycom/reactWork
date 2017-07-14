import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const PhoneField = (props) => (
  <div className="form-group">
    <label htmlFor="phone">Phone:</label>
    <Input type="number" className="form-control" id="phone" placeholder="Enter phone no" onChange={props.onChange} error={props.error}/>
    <div style={{color : "red"}}>
      {props.error}
    </div>
  </div>
);

PhoneField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string
} 

export default PhoneField;