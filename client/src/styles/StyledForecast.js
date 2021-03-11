
import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    .card {
        margin: 3em 0 2em 1em;
    }

    .title {
        display: flex;
        align-items: center;
        font-size: 2em;
        font-family: "Inter", mono;
        font-weight: 800;
        color: ${props => props.theme.colors.body.title};
        letter-spacing: 1px;
        margin: 0 0 .7em 0;
        padding: 0;
    }

    .content {
        display: flex;
        flex-direction: row;
        padding: 1em;
        color: ${props => props.theme.colors.body.text};
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
        color: ${props => props.theme.colors.body.text};
    }
`;
