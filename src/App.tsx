import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import ProfileDetails from './pages/ProfileDetails'
import SearchSection from './pages/SearchSection'

type Error = {
	error: string
}

function App({ error }: Error) {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<SearchSection />
				</Route>
				<Route path='/user/:username' exact>
					<ProfileDetails />
				</Route>
				<Route path='*'>
					<NotFound error={error} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
