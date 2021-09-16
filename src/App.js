import './App.css'
import ProfileDetails from './components/ProfileDetails'
import SearchSection from './components/SearchSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
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
					<NotFound />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
