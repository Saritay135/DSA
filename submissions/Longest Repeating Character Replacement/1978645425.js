# Title: Longest Repeating Character Replacement
# Submission ID: 1978645425
# Status: Accepted
# Date: April 14, 2026 at 03:23:13 PM CDT

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i=0,j=0;
    let map = {};
    let maxWS = 0;
    map[s[0]]=1;
    while(j<s.length){
        if(isWindowValid(map,k)){
           
           maxWS = Math.max(maxWS, j-i+1);
            ++j;
           map[s[j]] = !map[s[j]]? 1: ++map[s[j]];
        } else{
            --map[s[i]];
            ++i;
        }
        
    }
    return maxWS;
};

var isWindowValid= function(map,k){
  let totalCount=0;
  let maxCount =0;
  for(let i=0; i<26; i++){
    let char = String.fromCharCode(i+65);
     if(map[char]){
        totalCount = totalCount + map[char];
        maxCount = Math.max(maxCount,map[char]);
     }
  }
  return ((totalCount-maxCount)<=k);
}