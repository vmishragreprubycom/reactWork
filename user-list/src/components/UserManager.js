import React from 'react';
import UserForm from './UserForm';
import UserTableWithAddButton from './UserTableWithAddButton';

export default class UserManager extends React.Component {
  constructor() {
    super();

    const users = [];

    this.state = { 
      users,
      showAddUserForm: false,
      editing : false
    };
  }

  saveUsers = (users) => {
    this.setState({ users }, () => this.stopEditing());
  }

  formVisibility = (visibility) => {
    this.setState({showAddUserForm : visibility});
  }

  stopEditing = () => this.setState({editing: false}, () => this.formVisibility(false));
  

  startEditing = () => this.setState({editing: true});
  

  onAdd = (user) => {
    let users = this.state.users.slice();

    user.id = Date.now();
    users.unshift(user);

    this.saveUsers(users);
  }

  onCancel = () => this.stopEditing();
  

  onUpdate = (user) => {
    let userIndex = this.state.users.findIndex(obj => (obj.id === user.id));
    let users = this.state.users.slice();
    users[userIndex]  =  user;
    this.saveUsers(users);
  }

  userToEdit = (event) => {
    const userToEdit = (this.state.users.filter(obj => obj.id === Number(event.target.id)))[0];
    this.setState({ userToEdit },() => this.startEditing(), ()=> this.hideAddUserForm());
  }

  deleteUser = (index) => {
    if (window.confirm(`Do you really want to delete ${this.state.users[index].name}`)) {
      const users = this.state.users.slice();
      users.splice(index, 1);
      this.saveUsers(users);
    }
  }

  userToDelete = (event) => {
    let index = this.state.users.findIndex(obj => (obj.id === Number(event.target.id)));
    this.deleteUser(index);
  }
  

  render = () => {
    return (
      <div>
        {
          this.state.editing ? 
            <UserForm onUpdate={this.onUpdate} user={this.state.userToEdit} onCancel={this.onCancel} /> :  
            this.state.showAddUserForm ? 
              <UserForm onAdd={this.onAdd} onCancel={this.onCancel}/> :
              <UserTableWithAddButton 
                action={this.formVisibility}
                users={this.state.users} 
                userToEdit={this.userToEdit} 
                userToDelete={this.userToDelete}
              />
        }
      </div>
    )
  }
}
