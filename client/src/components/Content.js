import React from 'react'
import styled from 'styled-components'

const StyledContent = styled.div`
	width: 90vw;
	border-radius: 7px;
	display: flex;
	align-items: center;
	flex-direction: column;
`

const Content = ({ children }) => (
	<StyledContent>
		{ children }
	</StyledContent>
)


export default Content;
