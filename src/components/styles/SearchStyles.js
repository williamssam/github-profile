import styled from 'styled-components'

const MainSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 2rem;
	width: 100%;
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.colorOne};
`

const SearchHeading = styled.h2`
	padding-top: 2.5rem;
	text-align: center;
	font-size: clamp(4rem, 5vw, 5rem);
	font-weight: 900;
`

const SearchForm = styled.form.attrs((props) => ({
	autoComplete: 'off',
}))`
	position: relative;
	display: grid;
	place-items: center;

	.label {
		display: none;
	}
`

const SearchInputField = styled.input.attrs((props) => ({
	type: 'text',
}))`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	background: ${({ theme }) => theme.colors.colorTwo};
	margin-top: 2rem;
	padding: 1.5rem 2rem;
	font-size: 3rem;
	text-align: center;
	font-weight: 600;
	border-radius: 5px;
	color: #f8b334;
	caret-color: #f8b334;
`
export { SearchInputField, SearchForm, SearchHeading, MainSection }
