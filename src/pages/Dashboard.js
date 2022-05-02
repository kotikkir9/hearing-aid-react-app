import React from 'react'
import BatteryIcon from '../components/BatteryIcon';
import SoundInput from '../components/SoundInput';
import classes from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <BatteryIcon iconName='battery-full' text='L' percent='99' />
                <BatteryIcon iconName='battery-full' text='R' percent='99' />
                <BatteryIcon case iconName='battery-half' percent='40' />
            </header>
            <SoundInput title='Notification Sound' />

        </div>
    );
}
