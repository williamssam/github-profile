import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
	min-height: 100vh;
	color: #ddd;
	background: ${({ theme }) => theme.colors.colorOne};
`

interface ErrorProps {
	error: string
}

const NotFound = ({ error }: ErrorProps) => {
	return (
		<NotFoundContainer>
			{error ? (
				<h2>{error}</h2>
			) : (
				<h2>Uh 🙄, The page you are looking for does not exist.</h2>
			)}
			<Link to='/' style={{ textDecoration: 'underline' }}>
				Go back home🤗
			</Link>
		</NotFoundContainer>
	)
}

export default NotFound
