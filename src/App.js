import React, { Component } from 'react';
import TableComponent from './TableComponent.js'
import {BrowserRouter, Route} from 'react-router-dom'
import UserComponent from './UserComponent.js'
import UserContext from './Context.js'

class App extends Component {
  
  state={
    selectedUser: {}
  }

  setSelectedUser = (user) => {
    this.setState({selectedUser: user})
  }

  render() {
    return (
      <UserContext.Provider
        value = {{
          selectedUser: this.state.selectedUser,
          setSelectedUser: this.setSelectedUser
        }}
      >
        <BrowserRouter>
            <Route exact path="/" component={TableComponent}/>
            <Route path="/user/:id" component={UserComponent}/>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default App;
