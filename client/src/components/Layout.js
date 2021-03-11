import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { day, night } from '../styles/themes'
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const StyledWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        0deg,
        ${props => props.theme.colors.body.background.dark} 0%,
        ${props => props.theme.colors.body.background.light} 40%,
        ${props => props.theme.colors.body.background.light} 100%
    );
    padding: 0;
    margin: 0;
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={day}>
        <StyledWrapper>
            <Header/>
            <Content>{children}</Content>
        </StyledWrapper>
        <Footer />
    </ThemeProvider>
);

export default Layout;
