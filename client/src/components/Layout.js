import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const StyledWrapper = styled.div`
    background: #f3f3f3;
    color: #17151c;
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
    padding: 1rem 0 1rem 0;
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
