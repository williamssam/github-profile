import FlipMove from 'react-flip-move'
import { GoRepo, GoRepoForked, GoStar } from 'react-icons/go'
import langColors from '../utilities/langColors'
import {
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
} from './styles/TopReposStyles'

const TopRepos = ({ userRepo, options, handleChange }) => {
	return (
		<TopReposContainer>
			<header>
				<TopRepoTitle>Top Repos</TopRepoTitle>
				<span>by</span>

				<select onChange={handleChange}>
					{options.map((option, i) => (
						<option key={i} value={option.original_name}>
							{option.name}
						</option>
					))}
				</select>
			</header>

			<div>
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
							}) => (
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
														? `${name.substr(
																0,
																20
														  )}...`
														: name}
												</RepoParagraph>
											</RepoHeader>
											<RepoDescription>
												{description}
											</RepoDescription>
											<RepoFooter>
												<RepoDetails>
													<RepoDetail>
														<RepoLanguageColor
															style={{
																background:
																	langColors[
																		language
																	],
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
			</div>
		</TopReposContainer>
	)
}

export default TopRepos
