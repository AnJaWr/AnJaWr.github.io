import React, { Component } from "react";

// to nie jest element klasowy!

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      users: []

    };
  }

  getUser = () => {
    console.log("Dziala");
    console.log(this.objInput.value);

    this.setState({
      userName: this.objInput.value,
      // users: users.push(this.objInput.value)
    });


    console.log(this.props.userName);
  }

  // onInutChange = (event) => {
  //   this.setState({ userName: event.target.value });
  // } DRUGA WERSJA

  // ListItem(props) {
  //   return <li>{this.props.userName}</li>;
  // }


  deleteName = () => {
    console.log("Usuwa")
  };


  render() {

    return (



      <div className="set-value-panel">
        <p> Użytkownik: {this.state.userName}</p>
        <input type="text" ref={input => this.objInput = input} />

        {/* <input type="text" value={this.state.userName}
          onChange={this.onInputChange}
          ref={input => this.inputValue = input} /> */}


        <button onClick={() => { this.getUser() }}>Add User</button>
        <div>

          <div id="users-list-container" className="user-list-container">


          </div>
        </div></div>
    );
  }

}

export default Users;

