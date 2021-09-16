import { FooterContainer } from './styles/FooterStyles'

const Footer = () => {
	return (
		<FooterContainer>
			<p>
				Original Idea by{' '}
				<a href='https://octoprofile.vercel.app/'>
					Britanny Chang | Octoprofile
				</a>
			</p>

			<p>
				Built with <a href='https://reactjs.org/'>React Js</a> |{' '}
				<a href='https://github.com/IonicaBizau/node-gh-polyglot'>
					Github Polyglot
				</a>{' '}
				|{' '}
				<a href='https://www.styled-components.com/'>
					Styled Component
				</a>{' '}
				| <a href='https://www.chartjs.org/'>Chart Js</a> & by{' '}
				<a href='https://github.com/williamssam'>Williams Samuel</a>
			</p>
		</FooterContainer>
	)
}

export default Footer
