import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SelectSound.module.css';
import Sound from '../components/Sound';

export default function SelectSound() {
    const navigate = useNavigate();
    const [classicSelected, setClassicSelected] = useState(true);
    const [customSelected, setCustomSelected] = useState(false);

    const categoryHandler = (e) => {
        if(e.currentTarget.innerText.toLowerCase() === 'classic') {
            setClassicSelected(true);
            setCustomSelected(false);
        } else if(e.currentTarget.innerText.toLowerCase() === 'your sounds') {
            setClassicSelected(false);
            setCustomSelected(true);
        }    
    }

    const returnHandler = () => {
        navigate('/dashboard', { replace: true });
    }

    return (
        <div className={classes.container}>
            <header className={classes.heder}>
                <div className={classes["header-top"]}>
                    <ion-icon name="chevron-back-outline" class={classes['header-icon']} onClick={returnHandler}></ion-icon>
                    <h2>Select sound</h2>
                </div>
                <div className={classes.category}>
                    <button className={`${classes['category-btn']} ${classicSelected ? classes['category-btn--active'] : null}`} onClick={categoryHandler}>Classic</button>
                    <button className={`${classes['category-btn']} ${customSelected ? classes['category-btn--active'] : null}`} onClick={categoryHandler}>Your sounds</button>
                </div>
            </header>
            <main className={classes['sounds-container']}>
                <ul className={classes.sounds}>
                    <Sound id='Sound 1' name='sounds'>Notification sound 1</Sound>
                    <Sound id='Sound 2' name='sounds' checked>Notification sound 2</Sound>
                    <Sound id='Sound 3' name='sounds'>Notification sound 3</Sound>
                    <Sound id='Sound 4' name='sounds'>Notification sound 4</Sound>
                    <Sound id='Sound 5' name='sounds'>Notification sound 5</Sound>
                    <Sound id='Sound 6' name='sounds'>Notification sound 6</Sound>
                    <Sound id='Sound 7' name='sounds'>Notification sound 7</Sound>
                    <Sound id='Sound 8' name='sounds'>Notification sound 8</Sound>
                    <Sound id='Sound 9' name='sounds'>Notification sound 9</Sound>
                    <Sound id='Sound 10' name='sounds'>Notification sound 10</Sound>
                </ul>
            </main>
        </div>
    );
}
