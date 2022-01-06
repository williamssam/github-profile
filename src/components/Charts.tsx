import styled from 'styled-components'
import { UserRepos } from '../types'
import LanguageStars from './Charts/LanguageStars'
import MostStarredChart from './Charts/MostStarredChart'
import TopLanguagesChart from './Charts/TopLanguagesChart'

interface ChartsProps {
	topLanguage: UserRepos | null
	mostStarred: UserRepos | null
	languageStars: UserRepos | null
}

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

const Charts = ({ topLanguage, mostStarred, languageStars }: ChartsProps) => {
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
