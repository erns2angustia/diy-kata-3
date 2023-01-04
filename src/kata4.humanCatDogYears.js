const humanCatDogYears = (number) => {
  const humanAge = number;
  const petAgeOne = 15;
  const petAgeTwo = 24;
  if (humanAge > 2) {
    var catAge = petAgeTwo + (humanAge - 2) * 4;
    var dogAge = petAgeTwo + (humanAge - 2) * 5;
  }
  if (humanAge === 2) {
    var catAge = petAgeTwo;
    var dogAge = petAgeTwo;
  }
  if (humanAge === 1) {
    var catAge = petAgeOne;
    var dogAge = petAgeOne;
  }
  var result = [];
  result.push(humanAge);
  result.push(catAge);
  result.push(dogAge);

  return result;
};

module.exports = humanCatDogYears;
