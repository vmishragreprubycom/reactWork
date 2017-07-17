import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input 
    type={props.type} 
    className={props.className} 
    onChange={props.onChange}
    placeholder={props.placeholder } 
    value={props.value}
  /> 
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value:PropTypes.string.isRequired
}

Input.defaultProps = {
  placeholder: "enter here",
  className: "form-control",
  value:""
}

export default Input;