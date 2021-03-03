import React from "react";
import styled from "styled-components";
import Waves from './Waves'
import LakeErie from "../icons/Lake_Erie.svg";

const StyledWrapper = styled.div`
    display: inline-block;
    width: 100%;
    min-height: 30vh;
    background: #F5F6F7;
    background-image: ${`url(${LakeErie})`};
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    position: relative;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

    .headline {
        font-size: 10rem;
        margin: 0;
        background: -webkit-linear-gradient(45deg, #0093e9, #80d0c7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
            <h2 className="byline"></h2>
        </StyledLogo>
        <Waves />
    </StyledWrapper>
);

export default Header;
