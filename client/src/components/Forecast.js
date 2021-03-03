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
        margin: 1rem 0 1rem 0;
    }

    .title {
        display: flex;
        align-items: center;
        font-size: 4rem;
        font-family: "Inter", mono;
        font-weight: 800;
        color: #fff788;
        margin: 1rem;
        padding-left: 1rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        color: white;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
    }

    .text-container {
        margin-left: 1.4rem;
        font-size: 2rem;
        font-weight: 300;
        flex: 1;
    }

    .alert {
        background: rgba(255, 0, 0, 0.5);
        border-radius: 1rem;
        transition: all .2s ease; 
    }

    .alert:hover {
        background: rgba(255, 0, 0, .8);
    }

    .timestamp {
        display: flex;
        justify-content: center;
    }
`;

const Forecast = ({ bundle }) => {
    console.log(bundle);
    const lastUpdated = useDate(bundle.date);

    const iconSize = "2rem";
    const maxWaveHeight = 3; // in feet

    return (
        <StyledCardContainer>
            {bundle.data.map((item, i) => (
                <div className="card" key={i}>
                    <h1 className="title">{item.time}</h1>
                    <div className="content">
                        <div className="container">
                            <TiWeatherWindyCloudy size={iconSize} />
                            <span className="text-container">
                                {`Winds from ${item.wind.speed.low} to
                                    ${
                                        item.wind.speed.high
                                    } knots to the ${item.wind.direction.toLowerCase()}.`}
                            </span>
                        </div>
                        <div className={`container ${item.waves.height.high >  maxWaveHeight ? 'alert' : ''}`}>
                            <TiWaves size={iconSize} />
                            <span className="text-container">
                                {`Waves 
                                        ${item.waves.height.low} to
                                        ${item.waves.height.high} feet.`}
                            </span>
                            <span className="alert-message">
                                Avoid due to wave height.
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="timestamp">{`Last updated at ${lastUpdated}`}</div>
        </StyledCardContainer>
    );
};

export default Forecast;
