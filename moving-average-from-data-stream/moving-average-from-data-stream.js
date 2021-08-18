/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = new FixQueue(size);
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.add(val);
    const sum = this.queue.peekSum();
    
    return this.queue.peekSum() / this.queue.size;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */


class FixQueue {
    constructor(size) {
        this.maxLength = size;
    }
    
    arr = [];

    add(val) {
        if(this.arr.length === this.maxLength) {
            this.arr.shift();
        }
        
       this.arr.push(val); 
    }

    peekSum() {
        return this.arr.reduce((acc, val) => acc + +val, 0);
    }

    get size() {
        return this.arr.length;
    }
    
}