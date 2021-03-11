import React from "react";
import { useDate } from '../hooks/useDate'
import Card from "./Card";
import { StyledCardContainer } from "../styles/StyledForecast";

const Forecast = ({ weather, iconSize, maxWaveHeight }) => {
    const lastUpdated = useDate(weather.date) 

    return (
        <StyledCardContainer>
            {weather.data.map((item, i) => (
                <Card
                    key={i}
                    data={item}
                    iconSize={iconSize}
                    maxWaveHeight={maxWaveHeight}
                />
            ))}
            <div className="timestamp">{`Last updated at ${lastUpdated}`}</div>
        </StyledCardContainer>
    );
};

export default Forecast;
