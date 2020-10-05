import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
	background: white;
	width: 90vw;
	flex: 4;
	border-radius: 7px;
`

const Content = ({ children }) => (
	<StyledContent>
		{ children }
	</StyledContent>
)


export default Content;
