import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
    position: relative;
    width: 64px;
    height: 64px;

    div {
        position: absolute;
        border: 4px solid #;
        border-radius: 50%;
        animation: ripple-loader 1s ease-out infinite;
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes ripple-loader {
        0% {
            top: 32px;
            left: 32px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0;
            left: 0;
            width: 64px;
            height: 64px;
            opacity: 0;
        }
    }
`;

const LoadingSpinner = () => (
    <StyledLoader>
        <div />
        <div />
    </StyledLoader>
);

export default LoadingSpinner;
