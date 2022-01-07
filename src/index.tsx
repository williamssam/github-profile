import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './globalstyles/GlobalStyle'
import { Theme } from './globalstyles/Theme'

const token = process.env.REACT_APP_TOKEN

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
)
