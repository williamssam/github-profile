import styled from 'styled-components'

const ProfileHeader = styled.header`
	background: ${({ theme }) => theme.colors.colorOne};
	width: 100%;
	display: flex;
	gap: 4rem;

	a:hover {
		text-decoration: underline;
	}

	@media screen and (max-width: 648px) {
		flex-direction: column;
		text-align: center;

		padding-bottom: 4rem;
	}
`

const UserImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	box-shadow: 0 0.3px 1.9px rgba(0, 0, 0, 0.01),
		0 0.6px 4.3px rgba(0, 0, 0, 0.015), 0 1.2px 7.7px rgba(0, 0, 0, 0.018),
		0 1.9px 12.8px rgba(0, 0, 0, 0.022), 0 3.2px 21.2px rgba(0, 0, 0, 0.025),
		0 5.5px 37px rgba(0, 0, 0, 0.03), 0 12px 80px rgba(0, 0, 0, 0.04);
`

const ProfileArticle = styled.article`
	align-self: center;
	padding: 3rem 0;

	@media screen and (max-width: 1300px) {
		padding: 2rem 0;
	}

	@media screen and (max-width: 1300px) {
		padding-right: 3rem;
	}

	@media screen and (max-width: 648px) {
		padding: 0 2rem;
	}
`

const UserUsername = styled.h2`
	font-size: clamp(4rem, 5vw, 5rem);
	font-weight: 900;
`

const UserDescription = styled.p`
	font-size: 1.6rem;
	padding-top: 1rem;
`

const UserGithubDetails = styled.ul`
	padding-top: 3rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media screen and (max-width: 648px) {
		align-items: center;
	}
`

const UserGithubList = styled.li`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media screen and (max-width: 648px) {
		justify-content: center;
	}
`

const UserGithubStats = styled.ul`
	padding-top: 3rem;
	display: grid;
	grid-template-columns: repeat(3, 150px);
	gap: 2rem;

	@media screen and (max-width: 648px) {
		display: block;
	}
`

const UserGithubStatsDetails = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${({ theme }) => theme.colors.colorTwo};
	padding: 0.5rem 0.5rem;
	padding: 1rem 0;
	border-radius: 5px;

	@media screen and (max-width: 648px) {
		padding: 2rem;
		&:not(:first-of-type) {
			margin-top: 2rem;
		}
	}
`

const UserGithubStatP = styled.p`
	text-transform: uppercase;
	font-size: 1.3rem;
	padding-top: 0.5rem;
	letter-spacing: 1px;
	color: rgba(200, 225, 255, 0.7);
`

const UserGithubStatH2 = styled.h2`
	font-size: 2.5rem;
	letter-spacing: 1px;
`

export {
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
}
