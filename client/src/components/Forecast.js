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
        margin: 2rem 0 2rem 0;
    }

    .title {
        margin: 0 0 1rem 0;
        padding: 0 0 1rem 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.8);
        font-size: 1.6rem;
    }

    .content {
        display: flex;
        flex-direction: row;
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
`;

const Forecast = (weather) => {
    console.log(weather.bundle);

    const lastRefreshed = useDate(weather.bundle.date);

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
        </StyledCardContainer>
    );
};

export default Forecast;
