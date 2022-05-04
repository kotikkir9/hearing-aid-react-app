import React, { useRef } from 'react';
import classes from './VolumeBar.module.css';

export default function VolumeBar(props) {
    const volumeLevelRef = useRef();
    
    const touchHandler = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const position = e.touches[0].pageY - rect.top;

        let volumePercent = parseInt(100 - (position / rect.height) * 100);

        if(props.onActive) {
            if(volumePercent >= 0 && volumePercent <= 100) {
                props.onActive(volumePercent);
            }
        }

        if (volumePercent > 100) {
            volumePercent = 100;
        } else if(volumePercent < 0) {
            volumePercent = 0;
        }

        if (volumePercent < 20) {
            volumeLevelRef.current.style.backgroundColor = '#ffd43b';
        } else if (volumePercent > 80) {
            volumeLevelRef.current.style.backgroundColor = '#fa5252';
        } else {
            volumeLevelRef.current.style.backgroundColor = 'var(--color-secondary)';
        }

        volumeLevelRef.current.style.height = `${volumePercent}%`;
    }

    return (
        <div className={`${classes.container} ${props.className}`} onTouchStart={touchHandler} onTouchMove={touchHandler}>
            <div ref={volumeLevelRef} className={classes.volume}></div>
        </div>
    )
}
