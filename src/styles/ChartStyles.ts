import styled from 'styled-components'

export const Chart = styled.div`
	background: #fff;
	border-radius: 10px;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0.3px 1.9px rgba(0, 0, 0, 0.01),
		0 0.6px 4.3px rgba(0, 0, 0, 0.015), 0 1.2px 7.7px rgba(0, 0, 0, 0.018),
		0 1.9px 12.8px rgba(0, 0, 0, 0.022), 0 3.2px 21.2px rgba(0, 0, 0, 0.025),
		0 5.5px 37px rgba(0, 0, 0, 0.03), 0 12px 80px rgba(0, 0, 0, 0.04);
	height: 100%;
	position: relative;
`

export const ChartTitle = styled.h2`
	font-weight: 600;
	padding-bottom: 2rem;
	font-size: 2rem;
`
