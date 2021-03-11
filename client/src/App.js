import React from "react";
import WeatherProvider from "./context/WeatherProvider";
import Home from './components/Home'

function App() {
    return (
        <WeatherProvider>
            <Home />
        </WeatherProvider>
    );
}

export default App;
