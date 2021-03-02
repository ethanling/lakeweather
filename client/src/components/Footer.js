import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 10px;
	position: absolute;
	bottom: 20px;
`

const Footer = () => (
	<StyledFooter>
		&#169; Copyright 2020. Ethan Ling. 
	</StyledFooter>	
)

export default Footer;
