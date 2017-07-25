import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { id } = props;
  console.log("id",props.id);
  return (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.dob}</td>
    <td>
      <Link to={`users/edit/${id}`}>
        <Button action={props.userToEdit} label="edit" id={props.id} className="btn btn-primary"/>
      </Link>
      &nbsp;
      <Button action={props.userToDelete} label="delete" id={props.id} className="btn btn-danger"/>
    </td>
  </tr>
  )
}

User.propTypes = {  
  userToEdit: PropTypes.func.isRequired,
  userToDelete: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired 
}

export default User;