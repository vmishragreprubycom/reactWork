import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserTable = (props) => (
      <table className="table table-stripped">
        <UserTableHead />
        <UserTableBody userToDelete={props.userToDelete} userToEdit={props.userToEdit} users={props.users}/>
      </table>
)

const UserTableHead = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Birthday</th>
      <th>Action</th>
    </tr>
  </thead>
)

const UserTableBody = (props) => {
  const users = props.users.map((user, index) => (
      <User 
        userToEdit={props.userToEdit} 
        userToDelete={props.userToDelete} 
        key={index} 
        id={user.id}
        user={user} 
      />
    ));

  return (
    <tbody>
      {users}
    </tbody>
  )
}

PropTypes.UserTable = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  userToEdit: PropTypes.func.isRequired,
  userToDelete: PropTypes.func.isRequired
}


PropTypes.UserTableBody = {
  users: PropTypes.object.isRequired,
  userToEdit: PropTypes.func.isRequired,
  userToDelete: PropTypes.func.isRequired
}

export default UserTable;