/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    var count = 0;
    var currSum = 0;
    var maxAverage = Number.NEGATIVE_INFINITY;
    
    while(count < nums.length)
    {
        if(count < k)
        {
            currSum += nums[count];
        }
        else
        {
            currSum += nums[count];
            currSum -= nums[count-k];
        }

        if(count >= k -1)
        {
            average = currSum / k;

            if(average > maxAverage)
            {
                maxAverage = average;
            }
        }

        count++;
    }
    return maxAverage === Number.NEGATIVE_INFINITY ? 0 : maxAverage;
};