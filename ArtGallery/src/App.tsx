import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter></BrowserRouter>
		</>
	);
}

export default App;