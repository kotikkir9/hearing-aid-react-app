import React, { useRef } from 'react';
import classes from './Equalizer.module.css';

export default function Equalizer() {
    const slider_1 = useRef();
    const slider_2 = useRef();
    const slider_3 = useRef();
    const slider_4 = useRef();
    const slider_5 = useRef();

    const clickHandler = (e) => {
        e.currentTarget.classList.toggle(classes['btn--active']);
    }

    const selectHandler = (e) => {
        switch(e.currentTarget.value.toLowerCase()) {
            case 'preset-1': setSliderValues(70, 65, 55, 60, 45); break;
            case 'preset-2': setSliderValues(60, 40, 45, 40, 55); break;
            case 'preset-3': setSliderValues(40, 70, 70, 45, 25); break;
            case 'preset-4': setSliderValues(25, 30, 50, 65, 85); break;
            case 'preset-5': setSliderValues(50, 65, 45, 50, 90); break;
            default: setSliderValues([50, 50, 50, 50, 50]);
        }
    }

    const setSliderValues = (a, b, c, d, e) => {
        slider_1.current.value = a;
        slider_2.current.value = b;
        slider_3.current.value = c;
        slider_4.current.value = d;
        slider_5.current.value = e;
    }

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div>
                    <button className={`${classes['btn']} ${classes['btn--left']} ${classes['btn--active']}`} onClick={clickHandler}>L</button>
                    <button className={`${classes['btn']} ${classes['btn--right']}`} onClick={clickHandler}>R</button>
                </div>
                <select className={`${classes['btn']} ${classes.selector}`} onChange={selectHandler} defaultValue='default'>
                    <option value="default">Default</option>
                    <option value="preset-1">Preset 1</option>
                    <option value="preset-2">Preset 2</option>
                    <option value="preset-3">Preset 3</option>
                    <option value="preset-4">Preset 4</option>
                </select>
            </div>
            <div className={classes['equalizer-container']}>
            <div className={classes.equalizer}>
                <input ref={slider_1} id="slider-1" type="range" min="1" max="100" className={classes.slider} />
                <input ref={slider_2} id="slider-2" type="range" min="1" max="100" className={classes.slider} />
                <input ref={slider_3} id="slider-3" type="range" min="1" max="100" className={classes.slider} />
                <input ref={slider_4} id="slider-4" type="range" min="1" max="100" className={classes.slider} />
                <input ref={slider_5} id="slider-5" type="range" min="1" max="100" className={classes.slider} />
            </div>
            <div className={classes.text}>
                <span>60 Hz</span>
                <span>250 Hz</span>
                <span>1 Khz</span>
                <span>4 Khz</span>
                <span>8 Khz</span>
            </div>
        </div>
        </div>
    );
}
