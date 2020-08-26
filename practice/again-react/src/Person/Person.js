import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p className="Person" onClick={props.click}>HI!, my name is {props.name}. and i am {props.age} years old.</p>
            <p onClick={props.click}>{props.children} </p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    )

}
export default Radium(person);