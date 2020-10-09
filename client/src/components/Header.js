import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 20px;
	max-height: 20vh;
`

const StyledLogo = styled.h1`
	color: white;
	font-size: 5em;
`

const Header = () => (
	<StyledHeader>
		<StyledLogo>Lake Erie Conditions</StyledLogo>	
	</StyledHeader>
)

export default Header
