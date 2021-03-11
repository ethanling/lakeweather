import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);

    async function fetchWeatherData() {
        const data = await fetch("http://localhost:3333/data");
        setWeather(await data.json());
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <WeatherContext.Provider value={ weather }>
            { children }
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
