import React, { Component } from 'react';
import classes from './person.css';
import PropTypes from 'prop-types';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[App.js] redering....');
        return (
                <Auxilliary>
                    <p key="i1" onClick={this.props.click}>
                        hii, i'm {this.props.name} and my age is {this.props.age} thankyou
                    </p>
                    <p key="i2">{this.props.children}</p>
                    <input
                        key="i3"
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name}
                    />
                </Auxilliary>

        );
    }
};

Person.propTypes={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed:PropTypes.func
}
 
export default withClass(Person, classes.Person);