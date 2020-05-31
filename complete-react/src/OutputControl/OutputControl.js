import React from 'react';

const outControl = (props) => {
    const style= {
        
        font:'inherit',
        padding: '16px',
        border: '2px solid-inline'
    }
    return (
        <div>
            style={style}
            <p>UserName: {props.usrName}</p>
            <p>this is my project</p>
        </div>
    )
}
export default outControl;