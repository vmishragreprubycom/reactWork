import React from 'react';
import UserTableWithAddButton from './UserTableWithAddButton';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';

export const ShowUserTableWithAddButton = (props) => (
<div>
  <UserTableWithAddButton 
    history={props.history}
    users={props.users} 
    userToEdit={props.userToEdit} 
    userToDelete={props.deleteUser}
  />
</div>
)

function mapStateToProps(state) {
  return {
    users : state.reducers.users,
    user : state.reducers.userToEdit,
    userToDelete : state.reducers.userToDelete
  }
}

function mapDispatchtoProps(dispatch) {
  return {

    onAdd: (user) => {
      dispatch(actionCreators.addUser(user));
    },

    onUpdate: (user) => {
      dispatch(actionCreators.updateUser(user));
    },

    userToEdit: (event) => {
      dispatch(actionCreators.userToEdit(event.target.id));
    },

    deleteUser: (event) => {
      dispatch(actionCreators.removeUser(event.target.id));
    },
  }
}


export default connect(mapStateToProps, mapDispatchtoProps)(ShowUserTableWithAddButton);