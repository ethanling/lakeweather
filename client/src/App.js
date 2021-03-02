import React, { useState, useEffect } from 'react';
import Layout from './components/Layout'
import Forecast from './components/Forecast'

function App() {
	const [weather, setWeather] = useState(null);

	async function fetchWeatherData() {
		const data = await fetch('http://localhost:3333/data')
		setWeather(await data.json())
	}	

	useEffect(() => {
		fetchWeatherData()
	}, [])

	return (
		<div className="App">
			<Layout>
				{ weather ? 
					<Forecast bundle={weather} />
					: ''
				}				
			</Layout>
		</div>
	);
}

export default App;
