import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button 
    className={props.className} 
    onClick={props.action} 
    id={props.id} 
  >
  {props.label}
  </button>
);

Button.propTypes = {
  action : PropTypes.func.isRequired,
  label : PropTypes.string.isRequired,
  className : PropTypes.string,
  id: PropTypes.number.isRequired
}

Button.defaultProps = {
  className : "btn",
  id: 0
}

export default Button;
  