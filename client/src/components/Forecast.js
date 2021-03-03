import React from "react";
import styled from "styled-components";
import { FaWind, FaWater } from "react-icons/fa";
import { useDate } from "../hooks/useDate";
import DirectionArrows from "./DirectionArrows";

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
        flex-direction: row;
        padding: 1rem;
        color: white;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        font-size: 2rem;
        font-weight: 400;
    }

    .alert {
        background: rgba(255, 0, 0, 0.5);
        border-radius: 1rem;
        transition: all 0.2s ease;
    }

    .alert:hover {
        background: rgba(255, 0, 0, 0.8);
    }

    .alert-message {
        opacity: 0;
    }

    .row {
        display: flex;
        flex-direction: row;
    }


    .timestamp {
        display: flex;
        justify-content: center;
    }
`;

const Forecast = ({ bundle, iconSize, maxWaveHeight }) => {
    console.log(bundle);
    const lastUpdated = useDate(bundle.date);

    return (
        <StyledCardContainer>
            {bundle.data.map((item, i) => (
                <div className="card" key={i}>
                    <h1 className="title">{item.time}</h1>
                    <div className="content">
                        <div className="container">
                            <FaWind size={iconSize} />
                            <span className="text-container">
                                {`${item.wind.speed.low} - 
                                    ${item.wind.speed.high} kt.`}
                                <br />
                                <span className="row">
                                    <DirectionArrows
                                        direction={item.wind.direction}
                                    />
                                    {item.wind.direction}
                                </span>
                            </span>
                        </div>
                        <div
                            className={`container ${
                                item.waves.height.high > maxWaveHeight
                                    ? "alert"
                                    : ""
                            }`}
                        >
                            <FaWater size={iconSize} />
                            <span className="text-container">
                                {`${item.waves.height.low} - ${
                                    item.waves.height.high
                                } ft.`}
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
