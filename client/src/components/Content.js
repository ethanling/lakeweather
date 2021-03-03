import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    .container {
        width: 90vw;
        max-width: 980px;
    }
`;

const Content = ({ children }) => (
    <StyledContent>
        <div className="container">{children}</div>
    </StyledContent>
);

export default Content;
