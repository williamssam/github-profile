import { gql } from '@apollo/client'

export const USER = gql`
	query ($user: String!) {
		user(login: $user) {
			id
			bio
			avatarUrl
			company
			location
			login
			name
			createdAt
			email
			twitterUsername
			url
			websiteUrl
			repositories {
				totalCount
			}
			followers {
				totalCount
			}
			following {
				totalCount
			}
		}
	}
`
