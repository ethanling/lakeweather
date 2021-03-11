import React from "react";
import { StyledContent } from "../styles/StyledContent";

const Content = ({ children }) => { 
    return (
        <StyledContent>
            { children }
        </StyledContent>
    )
};

export default Content;
