import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { color } from 'chart.js/helpers';

interface Option {
	title: string;
	link: string;
}

const Navbar: React.FC = () => {
	const options: Option[] = [
		{ title: 'HOME', link: '' },
		{ title: 'ABOUT ARTIST', link: '/about-artist' },
		{ title: 'WORKS', link: '/works' },
		{ title: 'CONTACT', link: '/contact' },
	];

	return (
		<div className={styles.navbar}>
			{options.map((option) => (
				<NavLink
					key={option.link}
					to={option.link}
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? styles.selected : styles.unselected
					}
					activeStyle={{ color: 'white' }}
				>
					<div>{option.title}</div>
				</NavLink>
			))}
		</div>
	);
};

export default Navbar;
