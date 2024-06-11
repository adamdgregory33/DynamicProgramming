/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a-b );

    var left = 0;
    var right = nums.length -1;
    var count = 0;
    while(left < right)
    {
        var sum = nums[left] + nums[right];
        if(sum === k)
        {
            count++;
            left++;
            right--;
        }
        else if(sum < k) 
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return count;
};