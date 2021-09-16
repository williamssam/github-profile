import {
	UserGithubStatH2,
	UserGithubStatP,
	UserGithubStatsDetails,
	UserGithubStats,
	UserGithubList,
	UserGithubDetails,
	UserDescription,
	UserUsername,
	ProfileArticle,
	UserImage,
	ProfileHeader,
} from './styles/HeaderStyles'

import {
	GoBriefcase,
	GoCalendar,
	GoLocation,
	GoMarkGithub,
} from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'
import getDateName from '../misc/getDateName'

const Header = ({
	name,
	followers,
	following,
	public_repos,
	avatar_url,
	bio,
	location,
	created_at,
	login,
	html_url,
	twitter_username,
	company,
}) => {
	return (
		<>
			<ProfileHeader>
				<div>
					<UserImage src={avatar_url} alt={`${name} image`} />
				</div>

				<ProfileArticle>
					<header>
						<UserUsername>{name}</UserUsername>
						{bio && <UserDescription>{bio}</UserDescription>}
					</header>

					<UserGithubDetails>
						{login && (
							<UserGithubList>
								<GoMarkGithub />
								<a
									href={html_url}
									target='_blank'
									rel='noopener noreferrer'>
									@{login}
								</a>
							</UserGithubList>
						)}
						{twitter_username && (
							<UserGithubList>
								<FaTwitter />
								<a
									href={`https://twitter.com/${twitter_username}`}
									target='_blank'
									rel='noopener noreferrer'>
									{twitter_username}
								</a>
							</UserGithubList>
						)}
						{company && (
							<UserGithubList>
								<GoBriefcase />
								<p>{company}</p>
							</UserGithubList>
						)}
						{location && (
							<UserGithubList>
								<GoLocation />
								<p>{location}</p>
							</UserGithubList>
						)}
						{created_at && (
							<UserGithubList>
								<GoCalendar />
								<p>
									Joined{' '}
									{getDateName(
										created_at.substr(0, 10),
										'default'
									)}
								</p>
							</UserGithubList>
						)}
					</UserGithubDetails>

					<UserGithubStats>
						{public_repos && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{public_repos.toLocaleString()}
								</UserGithubStatH2>
								<UserGithubStatP>Repositories</UserGithubStatP>
							</UserGithubStatsDetails>
						)}
						{followers && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{followers.toLocaleString()}
								</UserGithubStatH2>
								<UserGithubStatP>Followers</UserGithubStatP>
							</UserGithubStatsDetails>
						)}
						{following && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{following.toLocaleString()}
								</UserGithubStatH2>
								<UserGithubStatP>Following</UserGithubStatP>
							</UserGithubStatsDetails>
						)}
					</UserGithubStats>
				</ProfileArticle>
			</ProfileHeader>
		</>
	)
}

export default Header
