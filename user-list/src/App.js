import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShowUserTableWithAddButton from './components/ShowUserTableWithAddButton';
import ShowAddUserForm from './components/ShowAddUserForm';
import ShowEditUserForm from './components/ShowAddUserForm';

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={ ShowUserTableWithAddButton } {...props}/>
      <Route exact path="/users" component={ ShowUserTableWithAddButton } {...props}/>
      <Route  path="/users/add" component={ ShowAddUserForm } {...props}/>
      <Route  path="/users/edit/:id" component={ ShowEditUserForm } {...props}/>
    </Switch>
  )
}


export default App;