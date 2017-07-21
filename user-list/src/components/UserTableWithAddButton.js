import React from 'react';
import Button from './Button';
import UserTable from './UserTable';
import PropTypes from 'prop-types';

const UserTableWithAddButton = (props) => (
  <div>
    <Button className="btn" action={props.action} label="add user" />
    <UserTable 
      users={props.users} 
      userToEdit={props.userToEdit} 
      userToDelete={props.userToDelete} 
    />
  </div>
);

UserTableWithAddButton.propsType = {
  action: PropTypes.func.isRequired,
  users : PropTypes.arrayOf(PropTypes.object).isRequired,
  userToEdit: PropTypes.func.isRequired, 
  userToDelete: PropTypes.func.isRequired
}

export default UserTableWithAddButton;