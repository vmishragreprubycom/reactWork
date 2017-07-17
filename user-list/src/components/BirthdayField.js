import React from 'react';
import FormControl from './FormControl';
import PropTypes from 'prop-types';

const BirthdayField = (props) => (
   <FormControl 
    htmlFor="dob"
    label="Birthday"
    type="date" 
    className="form-control" 
    placeholder="Enter your Birthday" 
    onChange={props.onChange} 
    value={props.dob}
    error={props.error}
  />
);

BirthdayField.propTypes = {
  onChange: PropTypes.func.isRequired, 
  error : PropTypes.string,
  dob : PropTypes.string.isRequired
}

export default BirthdayField;