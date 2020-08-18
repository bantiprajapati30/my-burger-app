import React, { PureComponent } from 'react';
import Person from './Person/person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //  console.log('[Person.js] getDerivedStateFromProps');
    //  return state;
    // } 
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Person.js] shouldComponentUpate ');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //       return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapShotBeforeUpdate ');
        return { message: 'snapshot!' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js]  componentDIdUpdate');
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount')
    }
    render() {
        console.log('[Person.js] rendering.......');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        })
    }

}
export default Persons;