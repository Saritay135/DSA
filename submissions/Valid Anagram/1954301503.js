# Title: Valid Anagram
# Submission ID: 1954301503
# Status: Accepted
# Date: March 20, 2026 at 04:26:26 PM CDT

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = {};
    if(!(s.length === t.length)) return false;
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }
        else ++map[s[i]];
    }
    for(let i = 0 ; i < t.length; i++){
        if(!map[t[i]] || map[t[i]]<0){
            return false;
        }
        else --map[t[i]];
    }
    return true;
};