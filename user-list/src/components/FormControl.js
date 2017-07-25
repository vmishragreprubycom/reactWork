import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const FormControl = (props) => (
  <div className="form-group">
    <label htmlFor={props.htmlFor}> {props.label}: </label>
    <Input 
      type={props.type} 
      className="form-control" 
      placeholder={props.placeholder} 
      onChange={props.onChange} 
      value={props.value}
      id={props.htmlFor}
    />
    {
      props.error && <div className="text-danger">
        {props.error}
      </div>
    }
  </div>
);

FormControl.propsType = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default FormControl;