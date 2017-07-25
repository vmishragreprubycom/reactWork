import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';

export const ShowAddUserForm = (props) => 
<div>
 <UserForm 
  onAdd={props.onAdd} 
  {...props}
/>
</div>

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

export default connect(mapStateToProps, mapDispatchtoProps)(ShowAddUserForm);