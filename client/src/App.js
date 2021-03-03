import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Forecast from "./components/Forecast";

function App() {
    const [waveWindData, setWaveWindData] = useState(null);

    async function fetchWeatherData() {
        const data = await fetch("http://localhost:3333/data");
        setWaveWindData(await data.json());
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <>
            {waveWindData? (
                <Layout>
                    <Forecast bundle={waveWindData} iconSize="5rem" maxWaveHeight={3}/>
                </Layout>
            ) : (
                <div>Loading</div>
            )}
        </>
    );
}

export default App;
