# Title: Jewels and Stones
# Submission ID: 1947520565
# Status: Accepted
# Date: March 13, 2026 at 10:42:29 PM CDT

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set();
    for(let i = 0; i < jewels.length; i++){
            jSet.add(jewels[i]);
    }
    let count = 0;
    for(let i = 0; i< stones.length; i++){
        if(jSet.has(stones[i])){
            count++;
        }
    }
    return count;
};