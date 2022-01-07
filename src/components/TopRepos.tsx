import { TopReposContainer, TopRepoTitle } from '../styles/TopReposStyles'
import { Option, TopReposProps } from '../types'
import Repos from './Repos'

// Top repos list
const TopRepos = ({ userRepo, options, handleChange }: TopReposProps) => {
	return (
		<TopReposContainer>
			<header>
				<TopRepoTitle>Top Repos</TopRepoTitle>
				<span>by</span>

				<select onChange={handleChange}>
					{options.map(({ original_name, name }: Option, i) => (
						<option key={i} value={original_name}>
							{name}
						</option>
					))}
				</select>
			</header>

			{/* the top 9 user repos */}
			<Repos userRepo={userRepo} />
		</TopReposContainer>
	)
}

export default TopRepos
