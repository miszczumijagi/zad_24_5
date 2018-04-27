const assert = require('assert');
const calculateStyleNotes = require('./calculateStylePoints');

describe('calculateStyleNotes', () => {
	it('should return sum of notes without the lowest and highest: when values do not repeat', () => {
		const actual = calculateStyleNotes([15, 16, 17, 17, 18]);

		const expected = 50;

		assert.equal(actual, expected);
	});

	it('should return sum of notes without the lowest and highest: when the highest is at the beginning of the array', () => {
		const actual = calculateStyleNotes([18, 15, 15, 15, 14]);

		const expected = 45;

		assert.equal(actual, expected);
	});

	it('should return sum of notes without the lowest and highest: when the lowest and the highest repeat', () => {
		const actual = calculateStyleNotes([17, 18, 17, 20, 20]);

		const expected = 55;

		assert.equal(actual, expected);
	});

	it('should return sum of notes without the lowest and highest: when there are floating point numbers', () => {
		const actual = calculateStyleNotes([18.5, 18.5, 18.5, 19.0, 19.5]);

		const expected = 56;

		assert.equal(actual, expected);
	});

	it('should return sum of notes without the lowest and highest: when there are integers and floating point numbers', () => {
		const actual = calculateStyleNotes([18, 18.5, 17.5, 19.5, 18.0]);

		const expected = 54.5;

		assert.equal(actual, expected);
	});

	it('should return sum of notes without the lowest and highest: when the sum is a floating point number', () => {
		const actual = calculateStyleNotes([18, 19, 17.5, 18.5, 19.5]);

		const expected = 55.5;

		assert.equal(actual, expected);
	});


	it('should return error if wrong value passed', () => {
		const actual = calculateStyleNotes(['a', 18.5, 17.5, 18.5, 18.5]);

		const expected = `Error: Wrong value passed. Check if array of notes consists solely of numbers`;

		assert.equal(actual, expected);
	});
});
    
