# Title: Sqrt(x)
# Submission ID: 1968105161
# Status: Accepted
# Date: April 3, 2026 at 04:17:57 PM CDT

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=2;
    let r = Math.trunc(x/2);
    if(x<2) return x;
    while(l<=r){
     let m = Math.floor((l+r)/2);
     if(x == m*m) return m;
     else if(x<(m*m)){
        r = m-1;
     }else{
        l=m+1;
     }
    }
    if(l>r) return r;
};