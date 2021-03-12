import React, { useState, useEffect } from "react";
import { StyledTitle } from "../styles/StyledForecast";
import { StyledWaveAlert } from "../styles/StyledAlert";
import { FaWind, FaWater } from "react-icons/fa";
import DirectionArrows from "./DirectionArrows";

const Alert = () => <span className="alert-icon">!</span>;

const Card = ({ data, iconSize, maxWaveHeight }) => {
    const [showWaveAlert, setShowWaveAlert] = useState(false);

    useEffect(() => {
        if (data.waves.height.high > maxWaveHeight) {
            setShowWaveAlert(true);
        }
    }, []);

    return (
        <div className="card">
            <StyledTitle>
                <h1 className="title">{data.time}</h1>
                <div className="title-underline">
                    <div className="title-underline-corner" />
                    <div className="title-underline-inner" />
                </div>
            </StyledTitle>
            <div className="card-background">
                <div className="content">
                    <div className="container">
                        <FaWind size={iconSize} />
                        <span className="text-container">
                            {`${data.wind.speed.low} - 
                                        ${data.wind.speed.high} kt.`}
                            <br />
                            <span className="row">
                                <DirectionArrows
                                    direction={data.wind.direction}
                                />
                                {data.wind.direction}
                            </span>
                        </span>
                    </div>
                    <div className="container">
                        <FaWater size={iconSize} />
                        <span className="text-container">
                            {`${data.waves.height.low}${
                                data.waves.height.high
                                    ? " - " + data.waves.height.high + " ft."
                                    : " ft. or less"
                            }`}
                        </span>
                    </div>
                </div>
                <div className="card-underline">
                    <div className="card-underline-corner"></div>
                    <div className="card-underline-inner"></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
