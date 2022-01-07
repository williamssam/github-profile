export interface Data {
	name: string
	followers: { totalCount: number }
	following: { totalCount: number }
	repositories: { totalCount: number }
	avatarUrl: string
	bio: string
	location: string
	createdAt: string
	login: string
	url: string
	twitterUsername: string
	company: string
	websiteUrl: string
}

export type UserProfile = {
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

export type Option = {
	name: string
	original_name: string
}

export type UserRepo = {
	id: number
	description: string
	forks: number
	repo_link: string
	size: number
	starred: number
	language: string
	name: string
	fork?: string
	label?: string
	value?: string
	color?: string
}

export interface Stat extends UserRepo {
	stargazers_count: number
	html_url: string
}

/** Array containing user repo */
export type UserRepos = UserRepo[]

export type TopReposProps = {
	/** Array containing user repo */
	userRepo: UserRepos
	/** Array of option for filter repo select menu */
	options: Option[]
	/** Event listener for select menu */
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
