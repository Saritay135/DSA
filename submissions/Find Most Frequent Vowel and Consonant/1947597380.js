# Title: Find Most Frequent Vowel and Consonant
# Submission ID: 1947597380
# Status: Accepted
# Date: March 14, 2026 at 12:39:07 AM CDT

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};
    for(let i=0; i<s.length; i++){
        map[s[i]] = !map[s[i]]?1: ++map[s[i]];
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapkeys = Object.keys(map);

    for(let i=0; i<mapkeys.length; i++){
        if(vowels.includes(mapkeys[i])){
        maxVowel = Math.max(maxVowel, map[mapkeys[i]]);
    }
    else {
        maxConsonant = Math.max(maxConsonant, map[mapkeys[i]]);
     }
    }
    return (maxVowel + maxConsonant);
};