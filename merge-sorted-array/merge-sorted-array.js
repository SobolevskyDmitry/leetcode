/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.

[] []
null null
[1] [0]
[0] [1]
 
        v
[1,2,3] undefined

         
[1,2,2,3,5,6]  

*/



var merge = function(nums1, m, nums2, n) {
   const nums1Copy = nums1.slice(0,m);
   
   let p1 = 0;
   let p2 = 0;
   let p = 0;
    
    while(p < m+n) {
        if(nums1Copy[p1] !== undefined && nums1Copy[p1] <= nums2[p2] || nums2[p2] === undefined){
            nums1[p] = nums1Copy[p1];
            p1++;
        } else {
            nums1[p] = nums2[p2];
            p2++;
        }
        p++;
    }
};