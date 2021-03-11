import React, { useContext } from "react";
import {
    StyledWrapper,
    StyledLogo,
    StyledCurrentWeather,
} from "../styles/StyledHeader";
import { WeatherContext } from "../context/WeatherProvider";
import Waves from "./Waves";
import Emoji from "./Emoji";
import LoadingSpinner from "./LoadingSpinner";

const Currently = ({ bundle }) => {
    const getWeatherIcon = (code, size) => {
        const url = `http://openweathermap.org/img/wn/${code}@${size}x.png`;
        return url;
    };

    const formatDescription = (string) => {
        const arr = string.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        }
        return arr.join(" ");
    };

    return (
        <StyledCurrentWeather>
            <img
                className="icon"
                src={getWeatherIcon(bundle.icon, 2)}
                alt={bundle.description}
            />
            <div className="temp">{bundle.temp}&#176; F</div>
            <div className="description">
                {formatDescription(bundle.description)}
            </div>
            <div className="humidity">{bundle.humidity}% <span>HUM</span></div>
        </StyledCurrentWeather>
    );
};

const Header = () => {
    const weather = useContext(WeatherContext);

    return (
        <StyledWrapper>
            <StyledLogo>
                {weather ? (
                    <Currently bundle={weather.current} />
                ) : (
                    <LoadingSpinner />
                )}
                <h1 className="headline">Lake Erie</h1>
                <p className="byline">
                    Shall we <Emoji label="kayak">🛶</Emoji>?
                </p>
            </StyledLogo>
            <Waves />
        </StyledWrapper>
    );
};

export default Header;
