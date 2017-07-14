import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button className={props.className} onClick={props.action}>{props.label}</button>
);

Button.propTypes = {
  action : PropTypes.func.isRequired,
  label : PropTypes.string.isRequired,
  className : PropTypes.string
}

Button.defaultProps = {
  className : "btn"
}

export default Button;
  