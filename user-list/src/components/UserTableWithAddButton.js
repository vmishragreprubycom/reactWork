import React from 'react';
import Button from './Button';
import UserTable from './UserTable';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserTableWithAddButton = (props) => (
  <div>
    <Link to="users/add">
      <Button className="btn btn-success" action={(e) => showAddForm(props.history)} label="add user" />
    </Link>
    <UserTable 
      history={props.history}
      users={props.users} 
      userToEdit={props.userToEdit} 
      userToDelete={props.userToDelete} 
    />
  </div>
);

function showAddForm(history) {
  history.push("/add");
}

UserTableWithAddButton.propsType = {
  history: PropTypes.object.isRequired,
  users : PropTypes.arrayOf(PropTypes.object).isRequired,
  userToEdit: PropTypes.func.isRequired, 
  userToDelete: PropTypes.func.isRequired
}

export default UserTableWithAddButton;