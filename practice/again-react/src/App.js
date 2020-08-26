import React, { Component } from 'react';
import './App.css'; 
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Sandeep', age: 21 },
      { id: '2', name: 'paawan', age: 20 },
      { id: '3', name: 'Abhishek', age: 22 }
    ],
    otherState: 'some value',
    showPerson: false
  }

  nameChangeHander = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }



  togglePersonHander = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHander = (personIndex) => {
    //  const persons=this.state.persons.splice(); //this is old methods
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }
  render() {
    const style = {
      backgroundColor: "green",
      color:"white",
      font: "inherit",
      border: '2px solid grey',
      padding: '6px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let persons = null;
    const { showPerson } = this.state;
    if (showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHander(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHander(event, person.id)} />
          })}
        </div>
      );
       style.backgroundColor='red';
       style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    }
   
   const classes=[];

   if(this.state.persons.length<=2) {
     classes.push('red');
   }
   if(this.state.persons.length<=1) {
     classes.push('bold');
   }
    return (
      <StyleRoot>
      <div className="App">
        <h1>This is react Application</h1>
        <p className={classes.join(' ')}>really woring fine</p>
        <button
          style={style}
          onClick={this.togglePersonHander}>toggle Person</button>
        {persons}
      </div>
      </StyleRoot>

    )
  }
}
export default Radium(App);