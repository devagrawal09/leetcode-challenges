/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if(!digits.length) return [1];
  const lastDigit = digits.pop() + 1;
  if(lastDigit < 10) {
    digits.push(lastDigit);
    return digits;
  }
  else {
    const newDigits = plusOne(digits);
    newDigits.push(lastDigit - 10);
    return newDigits;
  }
};