import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const StyledWrapper = styled.div`
	background: linear-gradient(180deg, #1CB5E0 0%, #000851 100%);
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Layout = ({ children }) => ( 
	<StyledWrapper>
		<Header />
		<Content>
			{ children }
		</Content>
		<Footer />
	</StyledWrapper>
)

export default Layout;
