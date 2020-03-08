//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = moment => {
	const startTime = moment.getTime()
	const gigasecond = 1000000000000
	return new Date(startTime + gigasecond)
}
