import React, { Component } from "react";
import UserList from "./UserList";

// to nie jest element klasowy!
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      users: []

    };
  }

  onInputChange = (event) => {
    this.setState({ userName: event.target.value });
    // } DRUGA WERSJA


  }

  getUser = () => {
    let user = {
      name: this.state.userName,
      id: Date.now()
      // id na pewno bedzie unikalny!
    }
    this.setState(prevState => {
      return ({
        users: prevState.users.concat(user),
        userName: ''
      })
    });

  }

  removeUser = (id, name) => {
    let users = this.state.users;
    users = users.filter(currentUser => {
      if (currentUser.id !== id) return currentUser;
      else return false;
      // filter wyrzua to co wskażemy 

    });
    this.setState({ users });
    // nadpisz userów
  };




  render() {
    console.log(this.state.users);
    return (



      <div>
        {/* <p> Użytkownik: {this.state.userName}</p> */}
        {/* <input type="text"  /> */}

        <input
          type="text"
          value={this.state.userName}
          onChange={this.onInputChange}
          ref={input => this.inputValue = input}
        />

        <button onClick={this.getUser}>Add User</button>

        <UserList
          users={this.state.users}
          removeUser={this.removeUser} />

      </div>
    );
  }

}

export default Users;

