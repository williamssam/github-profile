import { Pie } from 'react-chartjs-2'
import { Chart, ChartTitle } from '../styles/ChartStyles'

const TopLanguagesChart = ({ stat }) => {
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
