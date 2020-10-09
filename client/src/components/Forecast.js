import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
	width: 100%;
	display: flex;	
	justify-content: center;
	color: white;
	flex-direction: column;
`

const StyledHeading = styled.h3`
	color: white;
	font-size: 1em;
`

const StyledCard = styled.div`
	background: rgba(255, 255, 255, .3);
	border-radius: 8px;
	margin: 10px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 20px;
`

const StyledCardHeading = styled.h1`
	color: #0a0a0a;
	font-size: 1.2em;
	flex: 2;
	display: flex;
	align-items: center;
	margin-right: 20px;
`

const StyledContent = styled.div`
	flex: 7;	
`

const Forecast = (weather) => {
	console.log(weather.bundle)	

	const formatDate = (date) => {
		const newDate = new Date(date);
		return newDate.toLocaleString()
	}

	return (
		<>
			<StyledWrapper>
				{ weather.bundle.data.map((item, i) => (
					<StyledCard key={i}>
						<StyledCardHeading>{item.time}</StyledCardHeading>
						<StyledContent>
							<p>{item.blurb}</p>							
						</StyledContent>
					</StyledCard>
				)) }
			</StyledWrapper>
			<StyledHeading>Updated: {formatDate(weather.bundle.date)}</StyledHeading>
		</>
	)
}

export default Forecast
