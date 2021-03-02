import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: absolute;
	bottom: 20px;

    p {
        padding: 0;
        margin: 0;
    }
`

const Footer = () => (
	<StyledFooter>
        <p>&#169; Copyright 2020. Built with ❤️  by <a href="https://ethanling.com">Ethan Ling</a>.</p>
	</StyledFooter>	
)

export default Footer;
