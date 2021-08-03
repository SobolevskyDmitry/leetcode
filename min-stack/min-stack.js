/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.unshift(val);
    
    if (this.minStack[0] === undefined || this.minStack[0] >= val) {
        this.minStack.unshift(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.top() === this.minStack[0]) {
        this.minStack.shift()
    }
    
    return this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[0];
};
    
    

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */