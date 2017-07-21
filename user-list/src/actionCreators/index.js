export function addUser(user) {
  return {
    type : "ADD_USER",
    user
  }
}

export function updateUser(user) {
  return {
    type : "UPDATE_USER",
    user
  }
}

export function userToEdit(id) {
  return {
    type : "USER_TO_EDIT",
    id
  }
}

export function removeUser(id) {
  return {
    type : "REMOVE_USER",
    id
  }
}

export function showAddUserForm() {
  return { 
    type : "SHOW_FORM" 
  }
}

export function hideUserForm() {
  return {
    type : "HIDE_FORM"
  }
}