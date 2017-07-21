const users = [];

const defaultState = { 
  users,
  showAddUserForm: false,
  editing : false
};

export default function reducer(state=defaultState, action) {
  let users = state.users.slice();
  switch(action.type) {

    case 'SHOW_FORM' : 
      return {
        ...state,
        showAddUserForm : true
      }

    case 'ADD_USER' :
      action.user.id = Date.now();
      users.unshift(action.user);
      return { 
        ...state, 
        users, 
        showAddUserForm: false  
      };
    
    case 'UPDATE_USER' : 
      let userIndex = state.users.findIndex(obj => (obj.id === action.user.id));
      users[userIndex]  =  action.user;
      return {
        ...state, 
        users, 
        editing: false,
        showAddUserForm: false 
      }; 
    
    case 'USER_TO_EDIT' : 
      const userToEdit = (state.users.filter(obj => obj.id === Number(action.id)))[0];
      return { 
        ...state, 
        userToEdit , 
        editing : true 
      };
    
    case 'REMOVE_USER' :
      let index = state.users.findIndex(obj => (obj.id === Number(action.id)));
      users.splice(index, 1);
      return { 
        ...state, 
        users 
      };

      case "HIDE_FORM" :
        return {
          ...state,
          showAddUserForm: false,
          editing : false
        }

    default :
      return state;

  }
}