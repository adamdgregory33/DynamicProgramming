/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // We need to use the two pointers method
    // Max difference between left and right pointer is result

    var left = 0;
    var right = 0;

    var result = 0;

    var flipped = 0;
    while(right < nums.length)
    {
        if(flipped < k)
        {
            if(nums[right] === 0)
            {
                flipped++;
            }
            right++;
        }
        else
        {
            if(nums[right] === 1)
            {
                right++;
            }
            else
            {
                if(nums[left] === 0)
                {
                    flipped--;
                }
                left++;
            }
        }
        if(result < (right - left))
        {
            result = (right - left);
        }
    }
    return result;

};