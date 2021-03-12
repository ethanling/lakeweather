import styled from "styled-components";
import LakeErie from "../icons/Lake_Erie.svg";

export const StyledStripe = styled.div`
    background: ${props => props.theme.colors.footer.link.color};
    height: .5em;
    width: 100vw;
    position: absolute;
    top: 0;;
`

export const StyledBackground = styled.div`
    background: linear-gradient(
        0deg,
        ${props => props.theme.colors.footer.background.light} 70%,
        ${props => props.theme.colors.footer.background.dark} 100%
    );
    display: none;
`;

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-top: 2em;
    font-size: 1.2em;
    background-image: ${`url(${LakeErie})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% auto;
    color: ${(props) => props.theme.colors.footer.text};

    a {
        color: ${(props) => props.theme.colors.footer.link.color};
        text-decoration: none;
    }

    ul,
    li {
        padding: 0;
        margin: 0;
        font-size: 0.8em;
    }

    li {
        list-style-type: none;
        margin: 1em 0 0 0;
    }

    img {
        max-width: 10vw;
    }

    .copyright {
        margin: 0 auto;
        margin-top: 2em;
        font-size: 0.65em;

        span {
            margin: 0 0.5em 0 0.5em;
        }
    }

    .list-container {
        margin: 0 0 0 2em;
    }

    .heading {
        font-size: 1em;
        font-weight: 900;
        margin: 0;
        padding: 0;
    }
`;
