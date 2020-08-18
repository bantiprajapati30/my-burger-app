import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    persons: [
      { id: 'qwert', name: "sandeep", age: 21 },
      { id: 'sadf', name: "Abhishek", age: 22 },
      { id: 'dfsaa', name: "pawan", age: 29 }
    ],
    otherState: 'some other value',
    showPerson: false,
    showCockpit: true,
    changeCounter: 0
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps ', props);
    return state;
  }
  // componentWillMount() {
  //   console.log('[App.js  compontentWillMount');
  // }
  componentDidMount() {
    console.log('[APss.js] componentDidMouunt   ')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] ComponentDidUpdate')
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      }
    }
    );
  };


  deletehandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPerson) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletehandler}
        changed={this.nameChangeHandler} />;
    }
    return (
      <Auxilliary>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}
        >Remove</button>
        {this.state.showCockpit ? <Cockpit
          showPerson={this.state.showPerson}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        /> : null}
        {persons}
      </Auxilliary>
    );
  }
}

export default withClass(App, classes.App);