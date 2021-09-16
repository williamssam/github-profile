import styled from 'styled-components'
import TopLanguagesChart from './Charts/TopLanguagesChart'
import MostStarredChart from './Charts/MostStarredChart'
import LanguageStars from './Charts/LanguageStars'

const ChartsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 3rem;
	color: ${({ theme }) => theme.colors.colorOne};
	padding: 0 15rem;
	padding-top: 6rem;

	@media screen and (max-width: 648px) {
		padding: 2rem;
	}
`

const Charts = ({ topLanguage, mostStarred, languageStars }) => {
	return (
		<ChartsContainer>
			{topLanguage && <TopLanguagesChart stat={topLanguage} />}
			{mostStarred && <MostStarredChart stat={mostStarred} />}
			{languageStars && topLanguage ? (
				<LanguageStars stat={languageStars} language={topLanguage} />
			) : (
				''
			)}
		</ChartsContainer>
	)
}

export default Charts
