# Title: Kth Smallest Element in a Sorted Matrix
# Submission ID: 2094678641
# Status: Wrong Answer
# Date: August 4, 2026 at 08:28:26 PM CDT

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix[0].length;
    let heap = new MinPriorityQueue(x=>x.val);
    for(let i=0; i<n; i++){
        heap.push({val:matrix[i][0], row:i, col:0})
    }

    for(let count=0; count<k-1;count++){
        let {val,row,col} = heap.pop();

        if(col+1<n){
            heap.push({val:matrix[row][col+1], row:row, col:col+1});
        }
        else{
            let {val,row,col} = heap.front();
            heap.push({val:matrix[row][col+1],row:row, col:col+1})
        }
    }
    return heap.pop().val;
};