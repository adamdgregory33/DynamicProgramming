/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // Use two pointers
    // If there is a zero between them that is OK
    // If there is more than one zero (right pointer becomes zero)
    // shift left pointer until there is only 1 or less zeros again

    var left = 0;
    var right = 0;

    var maxResult = 0;

    var zeroCount = 0;

    while(right < nums.length)
    {
        if(zeroCount < 1)
        {
            if(nums[right] === 0)
            {
                zeroCount++;
            }
            right++;

        }
        else
        {
            if(nums[right] !== 0)
            {
                right++;
            }
            else
            {
                if(nums[left] === 0)
                {
                    zeroCount--;
                }
                left++;
            }
        }
        if(maxResult < (right - left - 1))
        {
            maxResult = right - left - 1;
        }
    }
    return maxResult;
};