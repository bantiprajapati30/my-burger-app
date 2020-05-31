import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    person: [
      { name: "sandep", age: 21 },
      { name: "Abhishek", age: 22 },
      { name: "Rakesh", age: 29 }
    ]
  }

  switchName = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 22 },
        { name: 'Abhishek Rajak', age: 21 },
        { name: 'Rakesh Prajapati', age: 31 }
      ]
    });
  };
  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'sandep', age: 22 },
        { name: "Abhishek", age: 21 },
        { name: event.target.value, age: 32 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchName('maxwell')}>swtich name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age} />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age} />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
          click={this.switchName.bind(this, 'sandy!')}
          changed={this.nameChangeHandler} > hobbies: racing</Person>
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'hii i am groot'));
  }
}

export default App;