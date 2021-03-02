import React from "react";
import LakeErie from "../icons/Lake_Erie.svg";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: inline-block;
    width: 100%;
    background-image: ${`url(${LakeErie})`};
    background-repeat: no-repeat;
    background-position: center;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

    .headline {
        font-size: 5rem;
        margin: 0;
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
            <h2 className="byline">Conditions</h2>
        </StyledLogo>
    </StyledWrapper>
);

export default Header;
