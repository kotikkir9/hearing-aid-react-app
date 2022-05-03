import React, { useState } from 'react'
import BatteryIcon from '../components/BatteryIcon';
import Equalizer from '../components/Equalizer';
import MenuFooter from '../components/MenuFooter';
import SoundInput from '../components/SoundInput';
import VolumeBar from '../components/VolumeBar';
import classes from './Dashboard.module.css';
import LeftHearingAid from '../assets/img/aid-left.png'
import RightHearingAid from '../assets/img/aid-right.png'
import VolumeModal from '../components/VolumeModal';

let timer;

export default function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(0);

    const modalHandler = (volume) => {
        setVolumeLevel(volume);

        if(!modalOpen) {
            setModalOpen(true);
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            setModalOpen(false);
        }, 500);
    };

    return (
        <div className={classes.container}>
            <VolumeModal open={modalOpen} volume={volumeLevel} />

            <header className={classes.header}>
                <BatteryIcon iconName='battery-full' text='L' percent='99' />
                <BatteryIcon iconName='battery-full' text='R' percent='99' />
                <BatteryIcon case iconName='battery-half' percent='40' />
            </header>
            <SoundInput title='Notification Sound' />
            <Equalizer />
            <div className={classes['volume-section']}>
                <div className={classes.volume}>
                    <img src={LeftHearingAid} alt="Hearing Aid" className={`${classes['volume-img']} ${classes['volume-img--left']}`} />
                    <span className={classes['volume-text']}>L</span>
                    <VolumeBar name='Left' className={classes['volume-bar']} onActive={modalHandler} />
                </div>
                <div className={classes.volume}>
                    <img src={RightHearingAid} alt="Hearing Aid" className={`${classes['volume-img']} ${classes['volume-img--right']}`} />
                    <span className={classes['volume-text']}>R</span>
                    <VolumeBar name='Right' className={classes['volume-bar']} onActive={modalHandler} />
                </div>
            </div>
            <MenuFooter />
        </div>
    );
}
