// converts date like 2/2/2022 to the name - 2 February 2022
const getDateName = (dateStr, locale) => {
	let date = new Date(dateStr)
	return date.toLocaleDateString(locale, { dateStyle: 'long' })
}

export default getDateName
