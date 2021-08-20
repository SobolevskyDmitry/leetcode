/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const res = [];
    const map = {};
    
    const smallestArr = nums1.length > nums2.length ? nums2 : nums1;
    const biggestArr = nums1.length > nums2.length ? nums1 : nums2;
    
    for (let num of smallestArr) {
        map[num] = 1;
    }
    
    for (let num of biggestArr) {
       if(map[num]) {
           res.push(num);
           delete map[num];
       }
    }
    
    return res;
};