import styled from "styled-components";

export const StyledFooter = styled.div`
    margin-top: -1px;
    display: flex;
    flex-direction: column;
    position: relative;
    font-size: 1em;
    background: ${props => props.theme.colors.footer.background};
    padding: 3em 1em 1em 1em;
    color: ${props => props.theme.colors.footer.text};

    a {
        color: ${props => props.theme.colors.footer.link.color};
        text-decoration: none;
    }

    ul,
    li {
        padding: 0;
        margin: 0;
        font-size: .8em;
    }

    li {
        list-style-type: none;
        margin: 1em 0 0 0;
    }

    img {
       max-width: 10vw; 
    }

    .content {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
    }

    .copyright {
        margin: 0 auto;
        font-size: .65em;

        span {
            margin: 0 0.5em 0 0.5em;
        }
    }

    .list-container {
        margin: 0 0 0 2em;
    }

    .heading {
        font-size: 1em;
        font-weight: 600;
        margin: 0;
        padding: 0;
    }


`;
