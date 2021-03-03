import React from "react";
import styled from "styled-components";
import {
    IoIosArrowBack,
    IoIosArrowDown,
    IoIosArrowForward,
    IoIosArrowUp,
} from "react-icons/io";

const North = IoIosArrowUp;
const South = IoIosArrowDown;
const East = IoIosArrowForward;
const West = IoIosArrowBack;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArrowSelector = ({ direction }) => {
    if (direction === "West") {
        return <IoIosArrowBack />;
    } else if (direction === "East") {
        return <IoIosArrowForward />;
    } else if (direction === "North") {
        return <IoIosArrowUp />;
    } else if (direction === "South") {
        return <IoIosArrowDown />;
    } else {
        return "";
    }
};

const DirectionArrows = ({ direction }) => (
    <StyledWrapper>
        <ArrowSelector direction={direction} />
    </StyledWrapper>
);

export default DirectionArrows;
