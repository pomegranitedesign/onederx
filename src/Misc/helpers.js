// Prints numbers in a human-readable format
// e.g. 60,000
export function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
