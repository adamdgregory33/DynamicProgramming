/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    var right = 1;
    var left = 0;

    while(right < nums.length)
    {
        if(nums[right] === 0)
        {
            right++;
            continue;
        }
        if(nums[right] !== 0)
        {
            if(nums[left] === 0)
            {
                nums[left] = nums[right];
                nums[right] = 0;
                right++;
                left++
            }
            else
            {
                left++;
                if(left >= right)
                {
                    right++;
                }
            }
        }
    }
};