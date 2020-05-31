import React, { Component } from 'react';
import './App.css';
import InControl from './InputControl/InputControl.js';
import OutControl from './OutputControl/OutputControl';

class App extends Component {
  state = {
    username: "sandeep"
  }
  userInputHandler = (event) => {
   this.setState({username: event.target.value})
  }
  render() {
    return (

      <div className="App">
        <ol>
          <li>this is my technology</li>
          <li>is this your technology ?</li>
          <li>this is not my technology</li>
          <li>this could be my technology</li>
          <li>this sould be my technology</li>
        </ol>
        <InControl changed={this.userInputHandler} currentName={this.state.username}/>
        <OutControl usrName={this.state.username} />
        <OutControl usrName={this.state.username} />
        <OutControl usrName={this.state.username} />
      </div>
    );
  }
}
export default App;