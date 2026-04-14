# Title: Permutation in String
# Submission ID: 1978678168
# Status: Accepted
# Date: April 14, 2026 at 04:43:07 PM CDT

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let windowLength = s1.length;
    for(let i=0; i<windowLength; i++){
        ++hashS[s1.charCodeAt(i)-97];
        ++hashW[s2.charCodeAt(i)-97];
    }
    let i=0, j=windowLength-1;
    while(j<s2.length){
        if(isHashSame(hashS, hashW)){
           return true;
        }else{
          --hashW[s2.charCodeAt(i)-97];
          ++i;
          ++j;
          ++hashW[s2.charCodeAt(j)-97];
        }
    }
    return false;
};

var isHashSame = function(hashS, hashW){
  for(let i=0; i<26;i++){
    if(hashS[i]!= hashW[i]){
        return false;
    }
  }
  return true;
};