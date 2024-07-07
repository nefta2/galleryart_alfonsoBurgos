import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import styles from './App.module.scss';
import AboutArtist from './components/about-artist/about-artist';
import Works from './components/works/works';
import Contact from './components/contact/contact';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div
					className={`${styles['main-page-wrapper']}  ${styles['pageWithSideBar']}`}
				>
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/about-artist" element={<AboutArtist />} />
						<Route path="/works" element={<Works />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
