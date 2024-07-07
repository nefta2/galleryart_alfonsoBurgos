import React from 'react';
import styles from './own-button.module.scss';
import { NavLink } from 'react-router-dom';

export interface OwnButtonProps {
	title: String;
	colorChosen: String;
	backgroundColorChosen: String;
	link: String;
}

function OwnButton({
	title,
	colorChosen,
	backgroundColorChosen,
	link,
}: OwnButtonProps) {
	return (
		<NavLink to={link}>
			<div className={styles.buttonDiv}>
				<div
					//@ts-expect-error
					style={{ color: colorChosen, background: backgroundColorChosen }}
					className={styles.button}
				>
					{title}
				</div>
			</div>
		</NavLink>
	);
}

export default OwnButton;
