import React from 'react';
import OwnButton from '../own-button/own-button';
import styles from './works.module.scss';
function Works() {
	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Paintings</div>
				</div>
				<div className={styles.paintContainer}>
					<div className={styles.paintItem}>1</div>
					<div className={styles.paintItem}>2</div>
					<div className={styles.paintItem}>3</div>
					<div className={styles.paintItem}>4</div>
					<div className={styles.paintItem}>5</div>
					<div className={styles.paintItem}>6</div>
					<div className={styles.paintItem}>7</div>
					<div className={styles.paintItem}>8</div>
					<div className={styles.paintItem}>9</div>
				</div>
			</div>
		</div>
	);
}

export default Works;
