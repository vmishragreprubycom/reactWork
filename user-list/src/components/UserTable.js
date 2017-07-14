import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserTable = (props) => (
      <table className="table table-stripped">
        <UserTableHead />
        <UserTableBody onUserDelete={props.onUserDelete} onUserEdit={props.onUserEdit} users={props.users}/>
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
        onUserEdit={props.onUserEdit} 
        onUserDelete={props.onUserDelete} 
        key={index} 
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
  onUserEdit: PropTypes.func.isRequired,
  onUserDelete: PropTypes.func.isRequired
}


PropTypes.UserTableBody = {
  users: PropTypes.object.isRequired,
  onUserEdit: PropTypes.func.isRequired,
  onUserDelete: PropTypes.func.isRequired
}

export default UserTable;