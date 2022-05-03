import React from 'react'
import Model from '../components/Model';
import classes from './SelectModel.module.css';
import HearingAidImage from '../assets/img/hearing-aid.png';

export default function SelectModel() {
  return (
    <>
      <header className={classes.header}>
        <h1>Select your model</h1>
        <ion-icon name="bluetooth-sharp" class={classes.icon}></ion-icon>
      </header>
      <div className={classes.container}>
        <Model src={HearingAidImage} title="Oticon More 1" />
        <Model src={HearingAidImage} title="Oticon More 2" />
        <Model src={HearingAidImage} title="Oticon More 3" />
        <Model src={HearingAidImage} title="Oticon More 4" />
        <Model src={HearingAidImage} title="Oticon More 5" />
        <Model src={HearingAidImage} title="Oticon More 6" />
        <Model src={HearingAidImage} title="Oticon More 7" />
        <Model src={HearingAidImage} title="Oticon More 8" />
      </div>
    </>
  );
}
