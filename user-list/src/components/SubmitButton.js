import React from 'react';
import PropTypes from 'prop-types';
 
const SubmitButton = (props) => (
      <input type="submit" className="btn btn-primary" onClick={props.action} value={props.label}/>
);

SubmitButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired 
}

SubmitButton.defaultProps = {
  label : "submit"
} 

export default SubmitButton;
  