import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.dob}</td>
    <td>
      <Button action={props.onUserEdit} user={props.user} label="edit" className="btn btn-primary"/>
      &nbsp;
      <Button action={props.onUserDelete} user={props.user} label="delete" className="btn btn-danger"/>
    </td>
  </tr>
)

User.propTypes = {  
  onUserDelete: PropTypes.func.isRequired,
  onUserEdit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  key : PropTypes.object.isRequired
}

export default User;