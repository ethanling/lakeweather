import React from "react";
import styled from "styled-components";
import { TiWeatherWindyCloudy, TiWaves } from "react-icons/ti";
import { useDate } from '../hooks/useDate'

const StyledCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .card {
        margin: 2rem 0 2rem 0;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 8px;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .2)
    }

    .title {
        display: flex;
        align-items: center;
        margin: 0 0 1rem 0;
        padding: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 1.6rem;
    }

    .content {
        display: flex;
        flex-direction: row;
        padding: 1rem;
    }

    .container {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
        font-weight: 600;
    }

    .timestamp {
        display: flex;
        justify-content: center;
    }
`;

const Forecast = (weather) => {
    console.log(weather.bundle);
    const lastUpdated = useDate(weather.bundle.date)

    return (
        <StyledCardContainer>
            {weather.bundle.data.map((item, i) => (
                <div className="card" key={i}>
                    <h1 className="title">{item.time}</h1>
                    <div className="content">
                        <div className="container">
                            <TiWeatherWindyCloudy size="4em" />
                            <div className="text-container">
                                <span>
                                    {`Winds from ${item.wind.speed.low} to
                                    ${item.wind.speed.high} knots to the ${
                                        item.wind.direction
                                    }.`}
                                </span>
                            </div>
                        </div>
                        <div className="container">
                            <TiWaves size="4em" />
                            <div className="text-container">
                                <span>
                                    {`Waves 
                                    ${item.waves.height.low} to
                                    ${item.waves.height.high} feet.`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="timestamp">{`Last updated at ${lastUpdated}`}</div>
        </StyledCardContainer>
    );
};

export default Forecast;
