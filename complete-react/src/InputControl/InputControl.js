import React from 'react';

const inControl = (props) => {
    const style= {
      font:'inherit',
      border: '2px solid '
    };
    return <input style={style} type="text" onChange={props.changed} value={props.currentName} />
}
export default inControl;