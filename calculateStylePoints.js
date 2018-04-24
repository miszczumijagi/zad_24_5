const calculateStyleNotes = (styleNotes) => {

	let arraySorted,
			styleNotesSum;

	function compareNumbers(a, b) {
		return a - b;
	}

	function integerToFloat(a) {
		let string = a.toFixed(1);
		return Number(string);
	}

	function getSum(a, b) {
		return a + b;
	}

	if (styleNotes.some(isNaN)) {

		return `Error: Wrong value passed. Check if array of notes consists solely of numbers`;

	} else {
	
	arraySorted = styleNotes.sort(compareNumbers);
	arraySorted.pop();
	arraySorted.shift();
	arraySorted = arraySorted.map(integerToFloat);

	styleNotesSum = arraySorted.reduce(getSum);

	return styleNotesSum;

	}
};

module.exports = calculateStyleNotes;