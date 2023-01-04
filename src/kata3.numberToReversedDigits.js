const numberToReversedDigits = (number) => {
  const arr = number.toString();
  let reverseString = function (str) {
    const result = Array.from(str).reverse();
    return result.map((num) => parseInt(num));
  };
  return reverseString(arr);
};

module.exports = numberToReversedDigits;
