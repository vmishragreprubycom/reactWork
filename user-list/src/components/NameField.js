import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const NameField = (props) => (
      <div className="form-group">
      <label htmlFor="name">Name:</label>
      <Input type="text" className="form-control" id="name" placeholder="Enter name" onChange={props.onChange} />
      <div style={{color : "red"}}>
        {props.error}
      </div>
    </div>
);

NameField.propTypes = {
  onChange : PropTypes.func.isRequired,
  error : PropTypes.string
}

export default NameField;