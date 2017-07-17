import React from 'react';
import Button from './Button';
import UserTable from './UserTable';
import UserForm from './UserForm';

export default class UserManager extends React.Component {
  constructor() {
    super();

    const users = [];

    this.state = { 
      users,
      showAddUserForm: false,
      editing : false
    };

    this.showAddUserForm = this.showAddUserForm.bind(this);  
    this.onAdd = this.onAdd.bind(this);
    this.onCancel = this.onCancel.bind(this); 
    this.onUpdate = this.onUpdate.bind(this);
    this.userToEdit = this.userToEdit.bind(this);
    this.userToDelete = this.userToDelete.bind(this);
  }

  saveUsers(users){
    this.setState({users});
  }

  showAddUserForm(event) {
    event.preventDefault();
    this.setState({showAddUserForm: true});
  }

  onAdd(user) {
    let users = this.state.users.slice();

    user.id = Date.now();
    users.unshift(user);

    this.saveUsers(users);
    this.setState({users,showAddUserForm: false});
  }

  onCancel() {
    this.setState({
      showAddUserForm : false,
      editing : false
    });
  }

  onUpdate(user) {
    const users = this.state.users.slice();
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === user.id) {
        users[i] = user;
        this.saveUsers(users);
        break;
      }
    }

    this.setState({users, editing: false, userToEdit: null});
  }

  userToEdit(event) {
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].id === Number(event.target.id)) {
        const userToEdit = {...this.state.users[i]};
        this.setState({
          userToEdit,
          editing: true, 
          showAddUserForm : false
        });
        break;
      }
    }

  }

  deleteUser(index) {
    if (window.confirm(`Do you really want to delete ${this.state.users[index].name}`)) {
      const users = this.state.users.slice();
      users.splice(index, 1);
      this.saveUsers(users);
      this.setState({users});
    }
  }

  userToDelete(event) {
    for (let i = 0; i < this.state.users.length; i++) {
      if(this.state.users[i].id === Number(event.target.id)) {
        this.deleteUser(i);
        break;
      }
    }
  }
  

  render() {
    return (
      <div>
        {
          this.state.editing ? 
            <UserForm onUpdate={this.onUpdate} user={this.state.userToEdit} onCancel={this.onCancel} /> :  
            this.state.showAddUserForm ? 
              <UserForm onAdd={this.onAdd} onCancel={this.onCancel}/> :
              <div>
                <Button className="btn" action={this.showAddUserForm} label="add user" />
                <UserTable 
                  users={this.state.users} 
                  userToEdit={this.userToEdit} 
                  userToDelete={this.userToDelete} 
                />
              </div>
        }
      </div>
    )
  }
}
