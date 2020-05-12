/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  let openTrack = [];
  for(let i = 0; i < s.length; i++) {
    if(openBrackets.includes(s[i])) {
      openTrack.unshift(openBrackets.findIndex(b => b === s[i]));
    } else {
      if(s[i] === closeBrackets[openTrack[0]]) {
        openTrack.shift();
      } else {
        return false;
      }
    }
  }
  if(openTrack.length) return false;
  return true;
};