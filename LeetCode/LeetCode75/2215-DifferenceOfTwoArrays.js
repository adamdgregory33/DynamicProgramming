/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    var set1 = new Set();

    for(var num of nums1)
    {
        set1.add(num);
    }

    var set2 = new Set();
    for(var num of nums2)
    {
        set2.add(num);
    }

    var result1 = new Set();
    var result2 = new Set();

    for(var num of nums1)
    {
        if(!set2.has(num))
        {
            result1.add(num);
        }
    }

    for(var num of nums2)
    {
        if(!set1.has(num))
        {
            result2.add(num);
        }
    }
    return [Array.from(result1), Array.from(result2)];
};