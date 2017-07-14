import React from 'react';
import PropTypes from 'prop-types';

const UserTable = (props) => (
      <table className="table table-stripped">
        <UserTableHead />
        <UserTableBody users={props.users}/>
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

const UserTableBody = (props) => (
  <tbody>
    {props.users}
  </tbody>
)

PropTypes.UserTable = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
}


PropTypes.UserTableBody = {
  users: PropTypes.object.isRequired
}

export default UserTable;