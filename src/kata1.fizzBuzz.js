const fizzBuzz = (number) => {
  const isDivisibleby5 = number % 5 === 0;
  const isDivisibleby3 = number % 3 === 0;
  if (isDivisibleby5 && isDivisibleby3) {
    return "FizzBuzz";
  }
  if (isDivisibleby5) {
    return "Buzz";
  }
  if (isDivisibleby3) {
    return "Fizz";
  }
  return number;
};

module.exports = fizzBuzz;
