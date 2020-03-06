//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = moment => {
	// get moment in miliseconds and add a gigasecond
	const gigasecond = moment.getTime() + 1000000000000
	// convert gigasecond into date and return
	return new Date(gigasecond)
}
