import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import UserTableWithAddButton from './UserTableWithAddButton';
import * as actionCreators from '../actionCreators';

export const UserManager = (props) => {
    return (
      <Router>
        <div>
         <Route exact path="/" render={ routeProps =>
            <UserTableWithAddButton 
              history={routeProps.history}
              users={props.users} 
              userToEdit={props.userToEdit} 
              userToDelete={props.deleteUser}
            />
          } />

         <Route path="/home" render={ routeProps => 
            <UserTableWithAddButton 
              history={routeProps.history}
              users={props.users} 
              userToEdit={props.userToEdit} 
              userToDelete={props.deleteUser}
            />
          } />

         <Route path="/add" render={ routeProps => 
            <UserForm 
              onAdd={props.onAdd} 
              {...routeProps}
            />
          } />

         <Route path="/edit" render={ routeProps => 
             <UserForm 
               onUpdate={props.onUpdate} 
               user={props.user} 
               {...routeProps}
             />
          } />
        </div>
      </Router>
    )
}


function mapStateToProps(state) {
  return {
    users : state.users,
    user : state.userToEdit,
    userToDelete : state.userToDelete
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

export default connect(mapStateToProps, mapDispatchtoProps)(UserManager);