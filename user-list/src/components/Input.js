import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <input 
    type={props.type} 
    className={props.className} 
    onChange={props.onChange}
    placeholder={props.placeholder } 
  /> 
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

Input.defaultProps = {
  placeholder: "enter here",
  className: "form-control",
}

export default Input;