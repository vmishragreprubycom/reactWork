const users = [];

const defaultState = { 
  users
};

export default function reducer(state=defaultState, action) {
  let users = state.users.slice();
  switch(action.type) {
    
    case 'ADD_USER' :
      action.user.id = Date.now();
      console.log("reducers : add this user",action.user.id);
      users.unshift(action.user);
      return { 
        ...state, 
        users 
      };
    
    case 'UPDATE_USER' : 
      console.log("reducer : update this user",action.id);
      let userIndex = state.users.findIndex(obj => (obj.id === action.user.id));
      users[userIndex]  =  action.user;
      return {
        ...state, 
        users
      }; 
    
    case 'USER_TO_EDIT' : 
      console.log("reducers : edit this user",action.id);
      const userToEdit = (state.users.filter(obj => obj.id === Number(action.id)))[0];
      return { 
        ...state, 
        userToEdit
      };
    
    case 'REMOVE_USER' :
      console.log("reducers : remove this user",action.id);
      let index = state.users.findIndex(obj => (obj.id === Number(action.id)));
      users.splice(index, 1);
      return { 
        ...state, 
        users 
      };

    default :
      return state;

  }
}