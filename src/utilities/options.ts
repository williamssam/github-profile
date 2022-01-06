interface Option {
	name: string
	original_name: string
}

type Options = Option[]

export const options: Options = [
	{
		name: 'stars',
		original_name: 'stargazers_count',
	},
	{
		name: 'forks',
		original_name: 'forks',
	},
	{
		name: 'size',
		original_name: 'size',
	},
]
