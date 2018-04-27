const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStyleNotes = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStyleNotes(styleNotes);

  return distancePoints + stylePoints + windFactor + gateFactor;
};

module.exports = calculateTotalPoints;