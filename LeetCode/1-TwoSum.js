/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // for each number up to the target number
    // we see if it is reachable (ie is contained in nums)
    // we then see if the difference between target and that num
    // is also in the table --> this is just n squared complexity

    // hash tabe solution
    // we loop through nums and get a target value
    // we add each value as key, and index as value
    // each iteration, we check if target value is in the table

    var result = {};

    for(var i = 0; i < nums.length; i++)
    {
        var remainder = target - nums[i];
        if(remainder in result)
        {
            return [i, result[remainder]];
        }
        result[nums[i]] = i;  
    }

    return [];
};