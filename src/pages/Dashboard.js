import React, { useRef, useState } from 'react'
import BatteryIcon from '../components/BatteryIcon';
import Equalizer from '../components/Equalizer';
import MenuFooter from '../components/MenuFooter';
import SoundInput from '../components/SoundInput';
import VolumeBar from '../components/VolumeBar';
import classes from './Dashboard.module.css';
import LeftHearingAid from '../assets/img/aid-left.png'
import RightHearingAid from '../assets/img/aid-right.png'

export default function Dashboard() {
    const modalRef = useRef();
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div className={classes.container}>
            <div className={`${classes.modal} ${modalOpen ? classes.open : classes.closed}`}>
                <p>50%</p>
            </div>
            <button onClick={modalHandler}>asd</button>

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
                    <VolumeBar name='Left' className={classes['volume-bar']} />
                </div>
                <div className={classes.volume}>
                    <img src={RightHearingAid} alt="Hearing Aid" className={`${classes['volume-img']} ${classes['volume-img--right']}`} />
                    <span className={classes['volume-text']}>R</span>
                    <VolumeBar name='Right' className={classes['volume-bar']} />
                </div>
            </div>
            <MenuFooter />
        </div>
    );
}
