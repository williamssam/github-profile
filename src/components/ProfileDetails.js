import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GhPolyglot from 'gh-polyglot'

import TopRepos from './TopRepos'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'
import NotFound from './NotFound'
import Charts from './Charts'
import { options } from '../utilities/options'

const ProfileDetails = () => {
	const [userProfile, setUserProfile] = useState(null)
	const [userRepo, setUserRepo] = useState(null)
	const [topLanguage, setTopLanguage] = useState(null)
	const [mostStarred, setMostStarred] = useState(null)
	const [languageStars, setLanguageStars] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	const { username } = useParams()

	const handleChange = (e) => {
		const sortBy = e.target.value

		const repoList = [...userRepo]

		repoList.sort((a, b) => b[sortBy] - a[sortBy])
		setUserRepo(repoList)
	}

	const fetchUserProfile = async () => {
		try {
			fetchUserRepo()
			const response = await fetch(
				`https://api.github.com/users/${username}`
			)

			if (!response.ok) {
				throw Error('could not fetch searched data')
			}
			const data = await response.json()

			setUserProfile(data)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setError(error.message)
		}
	}

	const fetchUserRepo = () => {
		let user = new GhPolyglot(`${username}/git-stats`)

		user.getAllRepos((err, stats) => {
			if (stats) {
				// sorts the repo by the most starred to the least starred then map through to get required fields
				const userRepoData = stats
					.sort((a, b) => b.stargazers_count - a.stargazers_count)
					.map((stat) => ({
						id: stat.id,
						starred: stat.stargazers_count,
						language: stat.language,
						forks: stat.forks,
						name: stat.name,
						repo_link: stat.html_url,
						size: stat.size,
						description: stat.description,
					}))
				const topRepo = userRepoData.slice(0, 8)

				setUserRepo(topRepo)
				setMostStarred(topRepo)
				setLanguageStars(userRepoData)
			} else {
				console.log(err)
			}
		})

		// get top languages
		user.userStats((err, stats) => {
			stats ? setTopLanguage(stats) : console.log(err)
		})
	}

	useEffect(() => {
		const abort = new AbortController()

		fetchUserProfile({ signal: abort.signal })

		return () => abort.abort()
	}, [username])

	if (isLoading) return <Loader />
	if (error) return <NotFound error={error} />

	return (
		<>
			<Header {...userProfile} />

			{/* Charts */}
			<Charts
				topLanguage={topLanguage}
				mostStarred={mostStarred}
				languageStars={languageStars}
			/>

			{/* Repo list */}
			{userRepo && (
				<TopRepos
					userRepo={userRepo}
					options={options}
					handleChange={handleChange}
				/>
			)}

			<Footer />
		</>
	)
}

export default ProfileDetails
