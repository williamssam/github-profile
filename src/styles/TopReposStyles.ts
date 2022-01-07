import styled from 'styled-components'

const TopReposContainer = styled.section`
	color: ${({ theme }) => theme.colors.colorOne};
	padding: 0 6rem;
	padding-top: 8rem;

	@media screen and (max-width: 648px) {
		padding: 3rem 2rem;
	}

	header {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	select {
		background-color: #fff8eb;
		padding: 0.5rem 2rem;
		text-align: left;
		font-family: inherit;
		font-size: inherit;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
		gap: 2.5rem;
		margin-top: 3rem;
	}

	li {
		min-height: 100%;
		background: #fff;
	}

	a {
		padding: 4.25rem 3rem;
		border-radius: 5px;
		box-shadow: rgb(0 0 0 / 20%) 0px 10px 30px -15px;
		transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
		display: flex;
		height: 100%;

		&:hover {
			box-shadow: rgb(0 0 0 / 20%) 0px 8px 20px -15px;
		}
	}
`

const TopRepoTitle = styled.h2`
	font-size: 2.75rem;
	font-weight: 600;
	text-decoration: underline wavy;
`

const RepoSection = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`

const RepoHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`

const RepoParagraph = styled.p`
	font-weight: 600;
`

const RepoDescription = styled.p`
	font-size: 1.5rem;
	padding-top: 1.7rem;
`

const RepoFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-top: 3rem;
`

const RepoDetails = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`

const RepoDetail = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const RepoFooterParagraph = styled.p`
	font-size: 1.3rem;
`

const RepoLanguageColor = styled.div`
	width: 10px;
	height: 10px;
	background: #fff;
	border-radius: 50%;
`
export {
	RepoLanguageColor,
	RepoFooterParagraph,
	RepoDetail,
	RepoDetails,
	RepoFooter,
	RepoDescription,
	RepoParagraph,
	RepoHeader,
	RepoSection,
	TopRepoTitle,
	TopReposContainer,
}
