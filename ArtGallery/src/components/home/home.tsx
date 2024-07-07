import React, { useState } from 'react';
import styles from './home.module.scss';
import OwnButton from '../own-button/own-button';
function Home() {
	const [backgroundPaint, setBackgroundPaint] = useState(
		'../../assets/flamingos-painting/flamingos-front-view.jpeg'
	);
	const carrouselOptions = [
		{
			url: '../../assets/flamingos-painting/flamingos-front-view.jpeg',
			name: '',
		},
	];
	return (
		<div className={styles.root} style={{ backgroundImage: backgroundPaint }}>
			<div className={styles.centerDiv}>
				<div className={styles.mainTitle}>Art Gallery</div>
				<div className={styles.secondDiv}>
					<div className={styles.secondTitle}>
						<div>By:</div>
						<div>Alfonso Burgos</div>
					</div>
					<OwnButton
						title={'See Works'}
						colorChosen={'#1B1B1B'}
						backgroundColorChosen={'#F2F2F2'}
						link={'/works'}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
