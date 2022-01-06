export interface UserProfile {
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

export interface Option {
	name: string
	original_name: string
}

export interface UserRepo {
	fork?: string
	id: number
	description: string
	forks: number
	repo_link: string
	size: number
	starred: number
	language: string
	name: string
	label?: string
	value?: string
	color?: string
}

export interface Stat extends UserRepo {
	stargazers_count: number
	html_url: string
}

export type UserRepos = UserRepo[]

export interface TopReposProps {
	userRepo: UserRepo[]
	options: Option[]
	handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

/*
					// style={{
					// 											background:
					// 												langColors[language],
					// 										}}
*/
