# Title: Kth Smallest Element in a Sorted Matrix
# Submission ID: 2094678590
# Status: Accepted
# Date: August 4, 2026 at 08:28:19 PM CDT

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n-1][n-1];

    const countLessEqual = (mid) => {
        let count = 0;
        let row = n - 1, col = 0;   // start at bottom-left corner
        while (row >= 0 && col < n) {
            if (matrix[row][col] <= mid) {
                count += row + 1;   // everything above in this column also <= mid
                col++;
            } else {
                row--;
            }
        }
        return count;
    };

    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (countLessEqual(mid) < k) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }

    return lo;
};