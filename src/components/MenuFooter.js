import React from 'react';
import classes from './MenuFooter.module.css';

export default function MenuFooter() {
    return (
        <footer className={classes['menu-nav']}>
            <ul className={classes.list}>
                <li className={classes['menu-item']}>
                    <ion-icon name="home" class={classes.icon}></ion-icon>
                    <p className={classes.text}>Home</p>
                </li>
                <li className={classes['menu-item']}>
                    <ion-icon name="options" class={classes.icon}></ion-icon>
                    <p className={classes.text}>Dashboard</p>
                </li>
                <li className={classes['menu-item']}>
                    <ion-icon name="information-circle" class={classes.icon}></ion-icon>
                    <p className={classes.text}>About</p>
                </li>
            </ul>
        </footer>
    );
}
