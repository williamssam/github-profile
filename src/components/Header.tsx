import { FaTwitter } from 'react-icons/fa'
import {
	GoBriefcase,
	GoCalendar,
	GoLocation,
	GoMarkGithub,
} from 'react-icons/go'
import {
	ProfileArticle,
	ProfileHeader,
	UserDescription,
	UserGithubDetails,
	UserGithubList,
	UserGithubStatH2,
	UserGithubStatP,
	UserGithubStats,
	UserGithubStatsDetails,
	UserImage,
	UserUsername,
} from '../styles/HeaderStyles'
import { getDateName } from '../utilities/getDateName'

interface HeaderProps {
	name: string
	followers: number
	following: number
	public_repos: number
	avatar_url: string
	bio: string
	location: string
	created_at: string
	login: string
	html_url: string
	twitter_username: string
	company: string
}

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
}: HeaderProps) => {
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
								<p>Joined {getDateName(created_at.slice(0, 20))}</p>
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
