import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'
import {
	SearchInputField,
	SearchForm,
	SearchHeading,
	MainSection,
} from './styles/SearchStyles'

const SearchSection = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!searchQuery) {
			alert('username cannot be empty 🙄')
		} else {
			history.push(`/user/${searchQuery.trim()}`)
		}
	}

	return (
		<MainSection>
			<GoMarkGithub className='icon' />
			<SearchHeading>Find your Github profile</SearchHeading>

			<SearchForm onSubmit={handleSubmit}>
				<div>
					<label htmlFor='user-profile' className='label'>
						User profile
					</label>

					<SearchInputField
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</SearchForm>
		</MainSection>
	)
}

export default SearchSection
