import { FaGlobe, FaTwitter } from 'react-icons/fa'
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
import { Data } from '../types'
import { getDateName } from '../utilities/getDateName'

const Header = ({
	name,
	followers,
	following,
	avatarUrl,
	bio,
	location,
	createdAt,
	login,
	url,
	twitterUsername,
	company,
	websiteUrl,
	repositories,
}: Data) => {
	return (
		<>
			<ProfileHeader>
				<div>
					<UserImage src={avatarUrl} alt={`${name} image`} />
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
								<a href={url} target='_blank' rel='noopener noreferrer'>
									@{login}
								</a>
							</UserGithubList>
						)}
						{twitterUsername && (
							<UserGithubList>
								<FaTwitter />
								<a
									href={`https://twitter.com/${twitterUsername}`}
									target='_blank'
									rel='noopener noreferrer'>
									{twitterUsername}
								</a>
							</UserGithubList>
						)}
						{websiteUrl && (
							<UserGithubList>
								<FaGlobe />
								<a
									href={websiteUrl}
									target='_blank'
									rel='noopener noreferrer'>
									{websiteUrl}
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
						{createdAt && (
							<UserGithubList>
								<GoCalendar />
								<p>Joined {getDateName(createdAt.slice(0, 20))}</p>
							</UserGithubList>
						)}
					</UserGithubDetails>

					<UserGithubStats>
						{repositories.totalCount && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{repositories.totalCount.toLocaleString()}
								</UserGithubStatH2>
								<UserGithubStatP>Repositories</UserGithubStatP>
								<small>public and private</small>
							</UserGithubStatsDetails>
						)}
						{followers.totalCount && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{followers.totalCount.toLocaleString()}
								</UserGithubStatH2>
								<UserGithubStatP>Followers</UserGithubStatP>
							</UserGithubStatsDetails>
						)}
						{following.totalCount && (
							<UserGithubStatsDetails>
								<UserGithubStatH2>
									{following.totalCount.toLocaleString()}
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
