/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  let sCharMap = {};
  let tCharMap = {};

  for(let i = 0; i < s.length; i++) {
      if(!sCharMap[s[i]]) {
          sCharMap[s[i]] = 0;
      };
      if(!tCharMap[t[i]]) {
          tCharMap[t[i]] = 0;
      }
      sCharMap[s[i]]++;
      tCharMap[t[i]]++;
  }

  for(let char in sCharMap) {
      if(tCharMap[char] !== sCharMap[char]) {
          return false;
      }
  }
  return true;
};