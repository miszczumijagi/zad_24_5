const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	it('should return startPoints when kPoint == distance', () => {
		const actual = calculateDistancePoints(200, 'giant', 200);

		const expected = 120;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when kPoint < distance', () => {
		const actual = calculateDistancePoints(254, 'giant', 200);

		const expected = 184.8;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when kPoint > distance', () => {
		const actual = calculateDistancePoints(110, 'giant', 200);

		const expected = 12;

		assert.equal(actual, expected);
  });
  
  it('should return distancePoints when distance is a floating point number', () => {
		const actual = calculateDistancePoints(191.5, 'giant', 200);

		const expected = 109.8;

		assert.equal(actual, expected);
  });

  it('should return distancePoints when hillSize: big', () => {
		const actual = calculateDistancePoints(135, 'big', 120);

		const expected = 87;

		assert.equal(actual, expected);
  });

  it('should return distancePoints when hillSize: normal', () => {
		const actual = calculateDistancePoints(100, 'normal', 98);

		const expected = 64;

		assert.equal(actual, expected);
  });
  
  it('should return error if wrong value passed', () => {
		const actual = calculateDistancePoints(199.5, 'mamucia', 200);

		const expected = `Error: Wrong value passed. Size of hill choose from: 'giant', 'big', 'normal'`;

		assert.equal(actual, expected);
	});

});