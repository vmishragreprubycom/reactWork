import React from 'react';
import Button from './Button';
import User from './User';
import UserTable from './UserTable';
import UserForm from './UserForm';

export default class UserManager extends React.Component {
  constructor() {
    super();

    const users = [];

    this.state = { 
      users,
      showAddUserForm: false
    };

    this.showAddUserForm = this.showAddUserForm.bind(this);  
    this.onAdd = this.onAdd.bind(this);
    this.onCancel = this.onCancel.bind(this); 
    this.onUserEdit = this.onUserEdit.bind(this);
    this.onUserDelete = this.onUserDelete.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  saveUsers(users){
    this.setState({users});
    console.log("user is saved");
   // this.state.users=users;
  }

  showAddUserForm(event) {
    event.preventDefault();
    this.setState({showAddUserForm: true});
  }

  onAdd(user) {
    alert("from onAdd user manager");
    let users = this.state.users.slice();

    user.id = Date.now();
    users.unshift(user);

    this.saveUsers(users);
    this.setState({users,showAddUserForm: false});
  }

  onCancel() {
    this.setState({showAddUserForm : false});
  }

  onUserEdit(event) {
    console.log("on user edit clicked");
  }

  onUserDelete() {
    console.log("on user delete clicked");
  }

  getAllUsers() {
    return (this.state.users.map((user, index) => (
      <User onUserEdit={this.onUserEdit} onUserDelete={this.onUserDelete} key={index} user={user} />
    )))
  }

  render() {
    return (
      <div>
        {
          this.state.showAddUserForm ? 
          <UserForm onAdd={this.onAdd} onCancel={this.onCancel}/> :
          <div>
            <Button className="btn" action={this.showAddUserForm} label="add user" />
            <UserTable users={this.getAllUsers()}/>
          </div>
        }
      </div>
    )
  }
}
