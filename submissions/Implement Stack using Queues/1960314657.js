# Title: Implement Stack using Queues
# Submission ID: 1960314657
# Status: Accepted
# Date: March 26, 2026 at 02:48:33 PM CDT


var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i=0; i<n-1; i++){
        this.q1.push(this.q1.shift());
    }
    let ans = this.q1.shift();

    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i=0;i<n-1; i++){
        this.q1.push(this.q1.shift());
    }
    let front = this.q1.shift();
    this.q1.push(front);
    return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */