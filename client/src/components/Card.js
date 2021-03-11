import React, { useState, useEffect } from "react";
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
            <h1 className="title">{data.time}</h1>
            <div className="content">
                <div className="container">
                    <FaWind size={iconSize} />
                    <span className="text-container">
                        {`${data.wind.speed.low} - 
                                        ${data.wind.speed.high} kt.`}
                        <br />
                        <span className="row">
                            <DirectionArrows direction={data.wind.direction} />
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
        </div>
    );
};

export default Card;
