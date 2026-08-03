# Title: Kth Largest Element in a Stream
# Submission ID: 2092682988
# Status: Accepted
# Date: August 3, 2026 at 08:48:49 AM CDT

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.heap = new MinimumHeap();

    for(let num of nums){
        this.heap.insert(num);
        if(this.heap.size()>k){
            this.heap.delete();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.insert(val);
    if(this.heap.size()>this.k){
        this.heap.delete();
    }
    return this.heap.peek()
};

class MinimumHeap{
    constructor(){
        this.heap =[];
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp(this.heap.length-1);
    }

    delete(){
        let top = this.heap[0];
        let last = this.heap.pop();
        if(this.heap.length){
        this.heap[0]=last;
        this.heapifyDown(0);
        }
        return top;
    }

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }
    heapifyUp(i){
        while(i > 0){
            let parent = Math.floor((i-1)/2);
            if(this.heap[i] >= this.heap[parent]) break;    // flipped from >
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    heapifyDown(i){
        let n = this.heap.length;
        while(true){
            let left = 2*i+1, right = 2*i+2, smallest = i;
            if(left < n && this.heap[left] < this.heap[smallest]) smallest = left;    // flipped from >, added bounds check
            if(right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if(smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */