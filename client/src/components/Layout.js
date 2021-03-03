import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const StyledWrapper = styled.div`
    color: #17151c;
    height: 100%;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 147, 233, 1) 35%,
        rgba(0, 147, 233, 1) 100%
    );
`;

const Layout = ({ children }) => (
    <StyledWrapper>
        <Header />
        <Content>{children}</Content>
    </StyledWrapper>
);

export default Layout;
