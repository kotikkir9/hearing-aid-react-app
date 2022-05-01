import React from 'react'
import classes from './Model.module.css';
import { useNavigate } from 'react-router-dom'

export default function Model(props) {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/connect', { replace: true });
    }

    return (
        <div className={classes.model} onClick={navigateHandler}>
            <img src={props.src} alt="Hearing aid" className={classes.image} />
            <h3 className={classes.title}>{props.title}</h3>
            <ion-icon name="chevron-forward" class={classes.icon}></ion-icon>
        </div>
    )
}
