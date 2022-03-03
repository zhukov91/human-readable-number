module.exports = function toReadable(number) {
	const unit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let result = [];

	if (number === 0) {
		result.push('zero');
	}

	if (Math.trunc(number / 100) > 0) {
		result.push(unit[Math.trunc(number / 100) - 1] + ' hundred')
	}

	if (number % 100 > 0 && number % 100 < 10) {
		result.push(unit[number % 100 - 1]);
	}

	if (number % 100 > 9 && number % 100 < 20) {
		result.push(ten[number % 100 - 10])
	}

	if (number % 100 > 19) {
		result.push(dozens[(Math.trunc((number % 100) / 10)) - 2]);
		if ((number % 100) % 10 > 0) {
			result.push(unit[((number % 100) % 10) - 1]);
		}
	}

	return (result.length > 1) ? result.join(' ') : result.join('');
}
