import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './SoundInput.module.css';

export default function SoundInput(props) {
    const navigate = useNavigate();

    const navigateToSelectSound = () => {
        navigate('/select-sound', { replace: true });
    }

    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <div className={classes['sound-container']} onClick={navigateToSelectSound}>
                <input type="text" placeholder="Notification Sound 2" className={classes['sound-input']} disabled />
                <ion-icon name="chevron-forward" class={classes['icon-sound']}></ion-icon>
            </div>
            <div className={classes['slider-container']}>
                <input type="range" min="1" max="100" className={classes.slider} />
                <ion-icon name="play" class={classes['icon-play']}></ion-icon>
            </div>
        </div>
    )
}
