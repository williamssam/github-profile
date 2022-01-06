import { useEffect, useRef, useState } from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { useHistory } from 'react-router-dom'
import {
	MainSection,
	SearchForm,
	SearchHeading,
	SearchInputField,
} from '../styles/SearchStyles'

const SearchSection = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const ref = useRef<HTMLInputElement | null>(null)
	const history = useHistory()

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault()

		if (!searchQuery) {
			alert('username cannot be empty 🙄')
		} else {
			history.push(`/user/${searchQuery.trim()}`)
		}
	}

	useEffect(() => {
		ref.current?.focus()
	}, [])

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
						ref={ref}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>
			</SearchForm>
		</MainSection>
	)
}

export default SearchSection
