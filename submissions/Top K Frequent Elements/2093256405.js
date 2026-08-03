# Title: Top K Frequent Elements
# Submission ID: 2093256405
# Status: Wrong Answer
# Date: August 3, 2026 at 06:25:30 PM CDT

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};

    for(let i=0;i<nums.length; i++){
        if(!map[nums[i]]) map[nums[i]]=0;
        ++map[nums[i]];
    }

    let pq = new MinPriorityQueue(x=>x.freq);

    for(key in map){
        pq.push({val:key, freq:map[key]});
    }
    if(pq.size()>k){
        pq.pop();
    }

    return pq.toArray().map(x=> Number(x.val));
};