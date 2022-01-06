import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './globalstyles/GlobalStyle'
import { Theme } from './globalstyles/Theme'

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<GlobalStyle />
		<React.StrictMode>
			<App error={''} />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)
