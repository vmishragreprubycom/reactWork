import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const BirthdayField = (props) => (
  <div className="form-group">
    <label htmlFor="date">Birthday:</label>
    <Input 
      type="date" 
      className="form-control"
      placeholder="enter Birthday here"
      onChange={props.onChange} 
    />
    <div className="text-danger">
      {props.error}
    </div>
  </div>
);

BirthdayField.propTypes = {
  onChange: PropTypes.func.isRequired, 
  error : PropTypes.string
}

export default BirthdayField;