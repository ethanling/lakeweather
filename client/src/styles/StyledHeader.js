import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.colors.main};
    z-index: 0;
    position: relative;
    background: radial-gradient(
        ellipse at center,
        ${(props) => props.theme.colors.header.background.light} 0%,
        ${(props) => props.theme.colors.header.background.light} 35%,
        ${props => props.theme.colors.header.background.dark} 100%
    );
    overflow: hidden;
`;

export const StyledLogo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    z-index: 2;
    position: relative;

    .headline {
        font-size: 4em;
        margin: 0;
        background: -webkit-linear-gradient(
            45deg,
            ${(props) => props.theme.colors.header.title.dark},
            ${(props) => props.theme.colors.header.title.light}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .byline {
        font-size: 3em;
        font-weight: 700;
        margin: 0;
        color: ${props => props.theme.colors.header.byline};
    }
`;

export const StyledCurrentWeather = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 0.9em;
    width: 100vw;
    position: absolute;
    top: 0;
    color: ${props => props.theme.colors.header.current};

    * {
        text-align: center;
    }

    .icon {
        height: 2em;
        width: 2em;
    }

    .temp {
        flex: 2;
    }

    .description {
        flex: 3;
    }

    .humidity {
        flex: 3;
    }

    .humidity span {
        font-size: 0.7em;
    }
`;
