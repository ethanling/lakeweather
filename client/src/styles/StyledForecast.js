import styled from "styled-components";

export const StyledTitle = styled.div`
    .title {
        display: flex;
        align-items: center;
        font-size: 1.8em;
        font-family: "Inter", mono;
        font-weight: 900;
        color: ${(props) => props.theme.colors.body.title.color};
        background: ${(props) => props.theme.colors.body.title.background};
        letter-spacing: 1px;
        padding: 0.25em 0.25em 0.25em 0.5em;
        margin: 0;
        font-style: oblique;
        border: 1px 1px 0px 1px solid
            ${(props) => props.theme.colors.body.title.underline};
    }

    .title-underline {
        height: 0.5em;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .title-underline-inner {
        flex: 1;
        height: 100%;
        background: ${(props) => props.theme.colors.body.title.underline};
    }

    .title-underline-corner {
        border-top: 0.5em solid
            ${(props) => props.theme.colors.body.title.underline};
        border-left: 0.5em solid rgba(0, 0, 0, 0);
        width: 0;
    }
`;

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .card {
        margin-bottom: 3em;
        width: 100%;
    }

    .card-background {
        margin-left: 0.5em;
        border: 0 0.5em 0.5em 0.5em solid
            ${(props) => props.theme.colors.body.title.background};
    }

    .card-underline {
        height: 0.5em;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .card-underline-corner {
        border-top: 0.5em solid
            ${(props) => props.theme.colors.body.card.underline};
        border-left: 0.5em solid rgba(0, 0, 0, 0);
        width: 0;
    }

    .card-underline-inner {
        flex: 1;
        height: 100%;
        background: ${(props) => props.theme.colors.body.card.underline};
    }

    .content {
        display: flex;
        flex-direction: row;
        padding: 1em;
        background: white;
        color: ${(props) => props.theme.colors.body.card.color};
        margin: 0;
    }

    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.3em;
        font-weight: 600;
        margin: 1em 0 0 0;
    }

    .alert {
        background: rgba(255, 0, 0, 0.5);
        border-radius: 2em;
        transition: all 0.2s ease;
    }

    .alert:hover {
        background: rgba(255, 0, 0, 0.8);
    }

    .alert-message {
        opacity: 0;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .col {
        display: flex;
        flex-direction: column;
    }

    .timestamp {
        display: flex;
        justify-content: center;
        color: ${(props) => props.theme.colors.body.text};
        font-size: .8em;
        margin-bottom: 2em;
    }
`;
