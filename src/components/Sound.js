import React from 'react';
import classes from './Sound.module.css';

export default function Sound(props) {
    return (
        <li>
            <input id={props.id} name={props.name} type="radio" defaultChecked={props.checked} className={classes.input} />
            <label htmlFor={props.id} className={classes.label}>
                <span className={classes.button}></span>
                <p>{props.children}</p>
            </label>
        </li>
    );
}
