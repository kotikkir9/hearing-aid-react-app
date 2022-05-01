import React from 'react'
import classes from './Connect.module.css';
import GuideImage from '../assets/img/connect-guide.png';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Connect() {
	const navigate = useNavigate();

	const returnHandler = () => {
		navigate('/');
	}

	return (
		<div className={classes.container}>
			<header className={classes.header}>
				<div className={classes['header-container']}>
					<ion-icon name="arrow-back-outline" class={classes.icon} onClick={returnHandler}></ion-icon>
					<h1>Oticon More 1</h1>
				</div>
				<img src={GuideImage} alt="Hearing aid connect guide" className={classes.image} />
			</header>

			<div className={classes['body-container']}>
				<div className={classes['text-box']}>
					<h2>Pair with your phone</h2>
					<p className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum error, obcaecati voluptatum voluptatibus rem iste, perspiciatis illum neque aut, id veniam magnam.</p>
					<p className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum error, obcaecati voluptatum voluptatibus rem iste, perspiciatis illum neque aut, id veniam magnam.</p>
				</div>
				<Button>Connect</Button>
			</div>
		</div>
	)
}