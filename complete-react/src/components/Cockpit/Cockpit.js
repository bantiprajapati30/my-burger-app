import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            console.log('data saved in sever');
            alert('data saved in cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup cockpit');
            alert('congralution');
        }
    }, []);
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work 2nd useEffect');
        }
    });

    const asignedClass = [];
    let btnClass = '';
    if (props.showPerson) {
        btnClass = classes.red;
    }

    if (props.personsLength <= 2) {
        asignedClass.push(classes.red);
    }
    if (props.personsLength <= 1) {
        asignedClass.push(classes.bold);
    }
    return (
        
            <div className={classes.Cockpit}>
                <h1>Hii i am React App!</h1>
                <p className={asignedClass.join(' ')}>this is really working</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}>toggle person</button>
            </div>

    )
};
export default React.memo(Cockpit);