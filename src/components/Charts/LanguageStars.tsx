import { Doughnut } from 'react-chartjs-2'
import { Chart, ChartTitle } from '../../styles/ChartStyles'
import { UserRepos } from '../../types'

interface LanguageStarsProps {
	stat: UserRepos
	language: UserRepos
}

const LanguageStars = ({ stat, language }: LanguageStarsProps) => {
	// individual language colors
	const languageColors = language.map((item) => item.color)

	// filter out repo that is not forked and if the star count is greater than 0
	const filteredRepos = stat.filter((repo) => !repo.fork && repo.starred > 0)

	// don't get same language twice
	const uniqueLanguages = new Set(filteredRepos.map((repo) => repo.language))

	// turn the uniqueLanguages to array while filtering out falsy values
	const labels = Array.from(uniqueLanguages.values()).filter((l) => l)

	const info = labels.map((lang) => {
		// filter out the repo languages
		const repos = filteredRepos.filter((repo) => repo.language === lang)
		// get the starred
		const starsArr = repos.map((r) => r.starred)
		// add the starred of each language together
		return starsArr.reduce((a, b) => a + b, 0)
	})

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Stars per Language',
				data: info,
				backgroundColor: languageColors,
				borderColor: languageColors,
				borderWidth: 1,
				hoverOffset: 4,
			},
		],
	}

	return (
		<Chart>
			<ChartTitle>Stars per Language</ChartTitle>
			<Doughnut data={data} />
		</Chart>
	)
}

export default LanguageStars
