import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
   0% {
		transform: rotate(0deg) scale(0.8);
	}
	50% {
		transform: rotate(360deg) scale(1.2);
	}
	100% {
		transform: rotate(720deg) scale(0.8);
	}
`

const ball1 = keyframes`
   0% {
		box-shadow: 30px 0 0 #f8b334;
	}
	50% {
		box-shadow: 0 0 0 #f8b334;
		margin-bottom: 0;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 #f8b334;
		margin-bottom: 10px;
	}
`

const ball2 = keyframes`
   0% {
		box-shadow: 30px 0 0 #97bf0d;
	}
	50% {
		box-shadow: 0 0 0 #97bf0d;
		margin-top: -20px;
		transform: translate(15px, 15px);
	}
	100% {
		box-shadow: 30px 0 0 #97bf0d;
		margin-top: 0;
	}
`

const LoadingContainer = styled.div`
	display: grid;
	place-items: center;
	min-height: 100vh;
	background: #e5e5e5;
`

const LoadingDiv = styled.div`
	animation: ${rotate} 1s infinite;
	height: 50px;
	width: 50px;

	&::before,
	&::after {
		border-radius: 50%;
		content: '';
		display: block;
		height: 20px;
		width: 20px;
	}

	&::before {
		animation: ${ball1} 1s infinite;
		background-color: #cb2025;
		box-shadow: 30px 0 0 #f8b334;
		margin-bottom: 10px;
	}

	&::after {
		animation: ${ball2} 1s infinite;
		background-color: #00a096;
		box-shadow: 30px 0 0 #97bf0d;
	}
`
export { LoadingContainer, LoadingDiv }
