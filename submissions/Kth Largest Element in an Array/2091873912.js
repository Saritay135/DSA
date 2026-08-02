# Title: Kth Largest Element in an Array
# Submission ID: 2091873912
# Status: Accepted
# Date: August 2, 2026 at 03:46:18 PM CDT

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const newHeap = new MinimumHeap();
    for(let i=0; i<nums.length; i++){
        newHeap.insert(nums[i]);
        while(newHeap.size()>k){
            newHeap.delete();
        }
    }
    return newHeap.peek();
};

class MinimumHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp(this.heap.length-1);
    }

    delete(){
        let top = this.heap[0];
        let last = this.heap.pop();
        if(this.heap.length>0){
            this.heap[0]= last;
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
        while(i>0){
        let parent = Math.floor((i-1)/2);
        if(this.heap[parent]<=this.heap[i]){
            break;
        }else{
            [this.heap[i],this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
        }
    }
    heapifyDown(i){
        let n = this.heap.length;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}