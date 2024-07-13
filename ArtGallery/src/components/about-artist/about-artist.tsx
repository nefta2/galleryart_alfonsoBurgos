import React from 'react';
import styles from './about-artist.module.scss';
import OwnButton from '../own-button/own-button';

function AboutArtist() {
	const workAura = [
		'/src/assets/about-artist/work-aura-1.jpeg',
		'/src/assets/about-artist/work-aura-2.jpeg',
		'/src/assets/about-artist/work-aura-3.jpeg',
	];
	return (
		<div style={{ margin: '0px 30px', height: '100%' }}>
			<div className={styles.root}>
				<div className={styles.leftDiv}>
					<div className={styles.mainTitle}>Alfonso Burgos</div>
					<div className={styles.secondDiv}>
						<div className={styles.artistDescription}>
							<div>
								Mi obra inicia con una intuición sensorial de los tonos a
								pintar, seguido de la selección de los elementos que serán
								protagonistas de la obra, los cuales extraigo de la naturaleza,
								me gusta pintar flamencos, son mis favoritos, ya que sus colores
								me recuerdan la alegría de un día de verano, también pinto
								garzas inmersas en los pantanos rodeadas de la vegetación
								silvestre que siempre esconde elementos sorpresas y que son
								fuente de mi inspiración.{' '}
							</div>
						</div>
						<OwnButton
							title={'Contact Me'}
							colorChosen={'#F2F2F2'}
							backgroundColorChosen={' #1B1B1B'}
							link={'/contact'}
						/>
					</div>
				</div>
				<div className={styles.artistDiv} />
			</div>
			<div className={styles.root2}>
				<div className={styles.mainTitle}>Work Aura</div>
				<div className={styles.pictures}>
					{workAura.map((x: any) => (
						<div
							className={styles.workAuraDiv}
							style={{ backgroundImage: `url(${x})` }}
						/>
					))}
				</div>
				<div style={{ fontSize: '40px' }}>
					"The art of living in eternal summmer"
				</div>
			</div>
		</div>
	);
}

export default AboutArtist;
