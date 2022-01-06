import { FooterContainer } from '../styles/FooterStyles'

const Footer = () => {
	return (
		<FooterContainer>
			<p>
				Original Idea by{' '}
				<a href='https://octoprofile.vercel.app/'>Britanny Chang</a>
			</p>

			<p>
				Built with React Js/TypeScript |{' '}
				<a href='https://github.com/IonicaBizau/node-gh-polyglot'>
					Github Polyglot
				</a>{' '}
				| <a href='https://www.styled-components.com/'>Styled Component</a>{' '}
				| <a href='https://www.chartjs.org/'>Chart Js</a> & by{' '}
				<a href='https:williamssam.netlify/'>Williams Samuel</a>
			</p>
		</FooterContainer>
	)
}

export default Footer
