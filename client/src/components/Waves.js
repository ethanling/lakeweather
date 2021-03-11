import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import LightWave from "../icons/lightwave.svg";
import DarkWave from "../icons/darkwave.svg";

const StyledAnimation = styled.div`
    max-width: 100vw;
    background: #f5f6f7;
    overflow: hidden;
    z-index: 0;

    .ocean {
        height: 5%;
        width: 100%;
        background: ${(props) => props.theme.colors.header.wave.ocean};
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .wave {
        background: url(${props => props.background}) repeat-x;
        position: absolute;
        top: -198px;
        width: 6400px;
        height: 198px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
            swell 7s ease -1.25s infinite;
        opacity: 1;
    }

    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }

    @keyframes swell {
        0%,
        100% {
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
    }
`;

const Waves = () => {
    const [waveSvg, setWaveSvg] = useState()
    const theme = useTheme();

    useEffect(() => {
        const svg = theme === "day" ? LightWave : DarkWave;
        setWaveSvg(svg)
    }, [])

    return (
        <StyledAnimation background={waveSvg}>
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
            </div>
        </StyledAnimation>
    );
};

export default Waves;
