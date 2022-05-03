import React from 'react';
import classes from './VolumeModal.module.css';

export default function VolumeModal(props) {
    return (
        <div className={`${classes.modal} ${props.open ? classes.open : classes.closed}`}>
            <p className={classes.text}>{props.volume}%</p>
        </div>
    );
}
