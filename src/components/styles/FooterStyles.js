import styled from 'styled-components'

export const FooterContainer = styled.footer`
	background: ${({ theme }) => theme.colors.colorOne};
	font-size: 1.5rem;
	display: flex;
	justify-content: space-between;
	padding: 1rem 6rem;
	margin-top: 5rem;

	a {
		text-decoration: underline;

		&:hover {
			text-decoration: none;
		}
	}

	@media screen and (max-width: 648px) {
		flex-direction: column;
		align-items: center;
		padding: 1rem 2rem;

		text-align: center;
	}
`
