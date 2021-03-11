import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import Layout from "./Layout";
import Forecast from "./Forecast";
import LoadingSpinner from './LoadingSpinner'


const Home = () => {
    const weather = useContext(WeatherContext);

    return (
        <Layout>
            {weather ? (
                <Forecast weather={weather} iconSize="1.5rem" maxWaveHeight={3} />
            ) : (
                <LoadingSpinner /> 
            )}
        </Layout>
    );
};

export default Home;
