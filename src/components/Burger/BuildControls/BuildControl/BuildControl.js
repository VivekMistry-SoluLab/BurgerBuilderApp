import React from 'react';
import classes from './BuildControl.css';


const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button n>
        <button 
            className={classes.Add} 
            onClick={props.added}>Add</button>
    </div>
);

export default BuildControl;
