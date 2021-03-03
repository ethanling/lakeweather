import React from "react";
import styled from "styled-components";
import Waves from "./Waves";
import LakeErie from "../icons/Lake_Erie.svg";

const StyledWrapper = styled.div`
    display: block;
    width: 100%;
    min-height: 30vh;
    background: #f5f6f7;
    z-index: 1;
    position: relative;
    background: radial-gradient(
        ellipse at center,
        rgba(255, 254, 244, 1) 0%,
        rgba(255, 254, 244, 1) 35%,
        #b7e8eb 100%
    );
    overflow: hidden;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1rem;

    .headline {
        display: inline;
        font-size: 10rem;
        margin: 0;
        background: -webkit-linear-gradient(45deg, #0093e9, #80d0c7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .logo {
        height: 10rem;
    }

    .byline {
        font-size: 3rem;
        margin: 0;
    }
`;

const Header = () => (
    <StyledWrapper>
        <StyledLogo>
            <h1 className="headline">Lake Erie</h1>
        </StyledLogo>
        <Waves />
    </StyledWrapper>
);

export default Header;
