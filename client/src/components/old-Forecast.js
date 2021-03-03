import React from "react";
import styled from "styled-components";
import { TiWeatherWindyCloudy, TiWaves } from "react-icons/ti";
import { useDate } from "../hooks/useDate";

const StyledCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .card {
        background: white;
        margin: 1rem 0 1rem 0;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 7px;
    }

    .title {
        display: flex;
        align-items: center;
        margin: -1px -1px 0 -1px;
        font-size: 1.2rem;
        font-family: "Inter", mono;
        font-weight: 600;
        padding: 1rem;
        background-color: #0093e9;
        background-image: linear-gradient(45deg, #0093e9 0%, #80d0c7 100%);
        color: rgba(255, 255, 255, 0.9);
        border-radius: 7px 7px 0 0;
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
    const lastUpdated = useDate(weather.bundle.date);

    const iconSize = "2rem";

    return (
        <StyledCardContainer>
            {weather.bundle.data.map((item, i) => (
                <div className="card" key={i}>
                    <h1 className="title">{item.time}</h1>
                    <div className="content">
                        <div className="container">
                            <TiWeatherWindyCloudy size={iconSize} />
                            <div className="text-container">
                                <span>
                                    {`Winds from ${item.wind.speed.low} to
                                    ${
                                        item.wind.speed.high
                                    } knots to the ${item.wind.direction.toLowerCase()}.`}
                                </span>
                            </div>
                        </div>
                        <div className="container">
                            <TiWaves size={iconSize} />
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
