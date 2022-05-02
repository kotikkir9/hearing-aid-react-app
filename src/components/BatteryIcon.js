import React from 'react';
import classes from './BatteryIcon.module.css';

export default function BatteryIcon(props) {
    return (
        <div className={classes.container}>
            {props.case ? <div className={classes['case-icon']}></div> : <div className={classes.text}><p>{props.text}</p></div>}
            <p className={classes.percent}>{props.percent}%</p>
            <ion-icon name={props.iconName} class={classes.icon}></ion-icon>
        </div>
    );
}
