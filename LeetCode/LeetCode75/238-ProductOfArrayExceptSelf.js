/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    var length = nums.length;
    var leftArr = Array(length).fill(1);
    var rightArr = Array(length).fill(1);

    var products = Array(length).fill(1);

    for(var i = 1; i < length; i++)
    {
        leftArr[i] = leftArr[i-1] * nums[i-1];
    }

    for(var i =length- 2; i >= 0; i--)
    {
        rightArr[i] = rightArr[i+1] * nums[i+1];
    }
    for(var i = 0; i < length; i++)
    {
        products[i] = leftArr[i] * rightArr[i];
    }
    return products;
};