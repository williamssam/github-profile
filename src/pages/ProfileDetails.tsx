import { useQuery } from '@apollo/client'
import GhPolyglot from 'gh-polyglot'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Charts from '../components/Charts'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import NotFound from '../components/NotFound'
import TopRepos from '../components/TopRepos'
import { USER } from '../query'
import { Data, Stat, UserRepos } from '../types'
import { options } from '../utilities/options'

type Username = {
	username: string
}

type Login = {
	user: string
}

type DataProps = {
	user: Data
}

const ProfileDetails = () => {
	const [userRepo, setUserRepo] = useState<UserRepos>([])
	const [topLanguage, setTopLanguage] = useState<UserRepos>([])
	const [mostStarred, setMostStarred] = useState<UserRepos>([])
	const [languageStars, setLanguageStars] = useState<UserRepos>([])
	const { username }: Username = useParams()
	const abort = new AbortController()
	const { loading, error, data } = useQuery<DataProps, Login>(USER, {
		variables: { user: `${username}` },
	})

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const sortBy = e.target.value

		if (!userRepo) return

		const repoList = [...userRepo]
		repoList.sort(
			(a: Record<string, any>, b: Record<string, any>) =>
				b[sortBy] - a[sortBy]
		)
		setUserRepo(repoList)
	}

	const fetchUserRepo = () => {
		let user = new GhPolyglot(`${username}/git-stats`)

		user.getAllRepos((err: string, stats: Stat[]) => {
			if (stats) {
				// sorts the repo by the most starred to the least starred then map through to get required fields
				const userRepoData: UserRepos = stats
					.sort((a, b) => b.stargazers_count - a.stargazers_count)
					.map((stat: Stat) => ({
						id: stat.id,
						starred: stat.stargazers_count,
						language: stat.language,
						forks: stat.forks,
						name: stat.name,
						repo_link: stat.html_url,
						size: stat.size,
						description: stat.description,
					}))
				const topRepo: UserRepos = userRepoData.slice(0, 9)

				setUserRepo(topRepo)
				setMostStarred(topRepo)
				setLanguageStars(userRepoData)
			} else {
				console.log(err)
			}
		})

		// get top languages
		user.userStats((err: any, stats: UserRepos) => {
			return stats ? setTopLanguage(stats) : console.log(err)
		})
	}

	useEffect(() => {
		fetchUserRepo()

		return () => abort?.abort()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [username])

	if (loading) return <Loader />
	if (error) return <NotFound />

	return (
		<>
			{data?.user && <Header {...data?.user} />}

			<main style={{ background: '#fafafa' }}>
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
			</main>

			<Footer />
		</>
	)
}

export default ProfileDetails
