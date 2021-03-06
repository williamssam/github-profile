import { Bar } from 'react-chartjs-2'
import { Chart, ChartTitle } from '../../styles/ChartStyles'
import { UserRepos } from '../../types'

interface MostStarredChartProps {
	stat: UserRepos
}

const MostStarredChart = ({ stat }: MostStarredChartProps) => {
	const name = stat.map((item) => item.name)
	const slicedName = name.map((item) => item.slice(0, 15))
	const stars = stat.map((item) => item.starred)

	const data = {
		labels: slicedName.slice(0, 5),
		datasets: [
			{
				label: 'Most Starred',
				data: stars.slice(0, 5),
				backgroundColor: [
					'rgba(255, 99, 132, 0.8)',
					'rgba(54, 162, 235, 0.8)',
					'rgba(255, 206, 86, 0.8)',
					'rgba(75, 192, 192, 0.8)',
					'rgba(153, 102, 255, 0.8)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
				],
				borderWidth: 1,
			},
		],
	}

	return (
		<Chart>
			<ChartTitle>Most Starred</ChartTitle>
			<Bar
				data={data}
				options={{
					maintainAspectRatio: true,
					responsive: true,
					aspectRatio: 1,
				}}
			/>
		</Chart>
	)
}

export default MostStarredChart
