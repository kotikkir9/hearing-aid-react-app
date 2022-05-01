import React from 'react'
import classes from './SelectModel.module.css';

export default function SelectModel() {
  return (
    <div>
      <header className={classes.header}>
        <h1>Select your model</h1>
        <ion-icon name="bluetooth-sharp" class={classes.icon}></ion-icon>
      </header>
      <div className={classes.container}>

      </div>
    </div>   
  );
}
