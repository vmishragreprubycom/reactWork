import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const EmailField = (props) => (
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <Input type="email" placeholder="Enter email" onChange={props.onChange} error={props.error}/>
    <div style={{color : "red"}}>
      {props.error}
    </div>
  </div>
);

EmailField.propTypes = {
  onChange: PropTypes.func.isRequired,
  error : PropTypes.string
} 

export default EmailField;