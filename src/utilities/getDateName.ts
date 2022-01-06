// converts date like 2/2/2022 to the name - 2 February 2022
export const getDateName = (dateStr: string) => {
	let date = new Date(dateStr)
	return date.toLocaleDateString('default', { dateStyle: 'long' })
}
