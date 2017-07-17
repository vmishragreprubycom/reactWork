import React from 'react';
import FormControl from './FormControl';
import PropTypes from 'prop-types';

const NameField = (props) => (
  <FormControl 
    htmlFor="name"
    label="Name"
    type="text" 
    className="form-control" 
    placeholder="Enter Name" 
    onChange={props.onChange} 
    value={props.name}
    error={props.error}
  />
);

NameField.propTypes = {
  onChange : PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  error : PropTypes.string,
}

export default NameField;