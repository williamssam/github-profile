import { Pie } from 'react-chartjs-2'
import { Chart, ChartTitle } from '../../styles/ChartStyles'
import { UserRepos } from '../../types'

interface TopLanguagesChartProps {
	stat: UserRepos
}

const TopLanguagesChart = ({ stat }: TopLanguagesChartProps) => {
	const language = stat.map((item) => item.label)
	const value = stat.map((item) => item.value)
	const color = stat.map((item) => item.color)

	const data = {
		labels: language,
		datasets: [
			{
				label: 'Top languages',
				backgroundColor: color,
				borderColor: color,
				data: value,
				hoverOffset: 4,
			},
		],
	}

	return (
		<Chart>
			<ChartTitle>Top Languages</ChartTitle>
			<Pie data={data} />
		</Chart>
	)
}

export default TopLanguagesChart
