/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sumLeft = Array(nums.length + 1).fill(0);
    var sumRight = Array(nums.length + 1).fill(0);

    var sum = 0;
    for(var i = 0; i < nums.length; i++)
    {
        sum += nums[i];
        sumLeft[i] = sum;
    }
    sum = 0;
    for(var i = nums.length -1 ; i >= 0; i--)
    {
        sum += nums[i];
        sumRight[i] = sum;
    }

    for(var i = 0; i < nums.length; i++)
    {
        if(sumLeft[i] === sumRight[i])
        {
            return i;
        }
    }
    return -1;
    
};