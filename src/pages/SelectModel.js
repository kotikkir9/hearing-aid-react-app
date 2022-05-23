import React from 'react'
import Model from '../components/Model';
import classes from './SelectModel.module.css';
import HearingAidImage from '../assets/img/hearing-aid-image.png';

export default function SelectModel() {
  return (
    <>
      <header className={classes.header}>
        <h1>Select your model</h1>
        <ion-icon name="bluetooth-sharp" class={classes.icon}></ion-icon>
      </header>
      <div className={classes.container}>
        <Model src={HearingAidImage} title="Hearing Aid 1" />
        <Model src={HearingAidImage} title="Hearing Aid 2" />
        <Model src={HearingAidImage} title="Hearing Aid 3" />
        <Model src={HearingAidImage} title="Hearing Aid 4" />
        <Model src={HearingAidImage} title="Hearing Aid 5" />
        <Model src={HearingAidImage} title="Hearing Aid 6" />
        <Model src={HearingAidImage} title="Hearing Aid 7" />
        <Model src={HearingAidImage} title="Hearing Aid 8" />
      </div>
    </>
  );
}
