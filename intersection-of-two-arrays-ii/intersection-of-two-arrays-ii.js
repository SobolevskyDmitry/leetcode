/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = [];
    const map = {};
    
    for(let n of nums1) {
        map[n] = map[n] ? map[n]+ 1 : 1;
    }
    
    for(let n of nums2){
        if (map[n]) {
            res.push(n);
            map[n]--;
        }
    }
    
    return res;
};