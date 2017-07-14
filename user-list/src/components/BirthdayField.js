import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const BirthdayField = (props) => (
  <div className="form-group">
    <label htmlFor="date">Birthday:</label>
    <Input type="date" className="form-control" onChange={props.onChange} error={props.error}/>
    <div style={{color : "red"}}>
      {props.error}
    </div>
  </div>
);

BirthdayField.propTypes = {
  onChange: PropTypes.func.isRequired, 
  error : PropTypes.string
}

export default BirthdayField;