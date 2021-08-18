/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size; 
    this.sum = 0;
    this.queue = [];
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    
    if(this.queue.length > this.size) {
        this.sum -= this.queue.shift();
    }
    
    this.sum +=val;
    
    return this.sum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

