import React from 'react';
import './person.css'
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>hii, i'm {props.name} and my age is {props.age} thankyou </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};
export default person;