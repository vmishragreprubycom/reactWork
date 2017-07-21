import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import UserTableWithAddButton from './UserTableWithAddButton';
import * as actionCreators from '../actionCreators';

export const UserManager = (props) => {
    return (
      <div>
        {
          props.editing ? 
            <UserForm onUpdate={props.onUpdate} user={props.user} onCancel={props.onCancel} /> :  
            props.showAddUserForm ? 
              <UserForm onAdd={props.onAdd} onCancel={props.onCancel}/> :
              <UserTableWithAddButton 
                action={props.formVisibility}
                users={props.users} 
                userToEdit={props.userToEdit} 
                userToDelete={props.deleteUser}
              />
        }
      </div>
    )
}


function mapStateToProps(state) {
  return {
    users : state.users,
    editing : state.editing,
    showAddUserForm : state.showAddUserForm,
    user : state.userToEdit,
    userToDelete : state.userToDelete
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    formVisibility: (visibility) => {
      dispatch(actionCreators.showAddUserForm());
    },

    onAdd: (user) => {
      dispatch(actionCreators.addUser(user));
    },

    onCancel: () => {
      dispatch(actionCreators.hideUserForm());
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

export default connect(mapStateToProps, mapDispatchtoProps)(UserManager);