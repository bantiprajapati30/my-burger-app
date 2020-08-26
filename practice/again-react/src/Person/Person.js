import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p className="Person" onClick={props.click}>HI!, my name is {props.name}. and i am {props.age} years old.</p>
            <p onClick={props.click}>{props.children} </p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    )

}
export default person;