import FlipMove from 'react-flip-move'
import { GoRepo, GoRepoForked, GoStar } from 'react-icons/go'
import {
	RepoDescription,
	RepoDetail,
	RepoDetails,
	RepoFooter,
	RepoFooterParagraph,
	RepoHeader,
	RepoLanguageColor,
	RepoParagraph,
	RepoSection,
	TopReposContainer,
	TopRepoTitle,
} from '../styles/TopReposStyles'
import { Option, TopReposProps, UserRepo } from '../types'
import { langColors } from '../utilities/langColors'

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

			<FlipMove typeName='ul'>
				{userRepo.length > 0 ? (
					userRepo.map(
						({
							id,
							description,
							forks,
							name,
							repo_link,
							size,
							starred,
							language,
						}: UserRepo) => (
							<li key={id}>
								<a
									href={repo_link}
									target='_blank'
									rel='noopener noreferrer'>
									<RepoSection>
										<RepoHeader>
											<GoRepo />
											<RepoParagraph title={name}>
												{name.length >= 25
													? `${name.slice(0, 20)}...`
													: name}
											</RepoParagraph>
										</RepoHeader>
										<RepoDescription>{description}</RepoDescription>
										<RepoFooter>
											<RepoDetails>
												<RepoDetail>
													<RepoLanguageColor
														style={{
															background: langColors[language],
														}}></RepoLanguageColor>
													<RepoFooterParagraph>
														{language}
													</RepoFooterParagraph>
												</RepoDetail>
												<RepoDetail>
													<GoStar />
													<RepoFooterParagraph>
														{starred.toLocaleString()}
													</RepoFooterParagraph>
												</RepoDetail>
												<RepoDetail>
													<GoRepoForked />
													<RepoFooterParagraph>
														{forks.toLocaleString()}
													</RepoFooterParagraph>
												</RepoDetail>
											</RepoDetails>
											<RepoFooterParagraph>
												{size.toLocaleString()} KB
											</RepoFooterParagraph>
										</RepoFooter>
									</RepoSection>
								</a>
							</li>
						)
					)
				) : (
					<p>no repo found 😬🤨</p>
				)}
			</FlipMove>
		</TopReposContainer>
	)
}

export default TopRepos
