import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const NameField = (props) => (
      <div className="form-group">
      <label htmlFor="name">Name:</label>
      <Input 
        type="text" 
        className="form-control" 
        placeholder="Enter name" 
        onChange={props.onChange} 
      />
      <div className="text-danger">
        {props.error}
      </div>
    </div>
);

NameField.propTypes = {
  onChange : PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  error : PropTypes.string
}

export default NameField;