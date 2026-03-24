# Title: Group Anagrams
# Submission ID: 1958229633
# Status: Accepted
# Date: March 24, 2026 at 04:14:36 PM CDT

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i=0; i<strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");
        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]];
        }
        else{
            map[sortedStr].push(strs[i]);
        }
    }
    return [...Object.values(map)];
};