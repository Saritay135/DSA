# Title: Isomorphic Strings
# Submission ID: 1958212557
# Status: Accepted
# Date: March 24, 2026 at 03:38:13 PM CDT

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapStoT = {};
    let mapTtoS = {};
    for(let i=0; i<s.length; i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]){
            return false;
        }
    }
    return true;
};