import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = () => (
	<StyledFooter>
		&#169; Copyright 2020. Ethan Ling. 
	</StyledFooter>	
)

export default Footer;
