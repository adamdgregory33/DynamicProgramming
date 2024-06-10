/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // Requires a bit of research / deeper understanding of how 
    // this breaks down logically to
    // if nums[i] is the smallest from index 0 to i - there is no subsequence prior 
    // and nums[i] is the largest between index i to length - there is no subsequence after

    // We create an array of indexes that are larger / smaller than element i using the above
    // if there exists an index where greater and smaller have valid index, that is a triple subcycle.

    // This is slow but would work to get a given subset's indices
    // Other methods work but are more "tricks" in their apporach

    if(nums.length <= 2)
    {
        return false;
    }

    var smaller = Array(nums.length).fill(-1);
    var greater = Array(nums.length).fill(-1);

    var minIndex = 0;
    
    var temp = nums[0];

    for(var i = 1; i < nums.length; i++)
    {
        if(nums[i] <= nums[minIndex])
        {
            minIndex = i;
            smaller[i] = -1;
        }
        else
        {
            smaller[i] = minIndex;
        }
    }

    var maxIndex = nums.length -1;

    for(var i = nums.length -1 -1; i >= 0; i--)
    {
        if(nums[i] >= nums[maxIndex])
        {
            maxIndex = i;
            greater[i] = -1;
        }
        else
        {
            greater[i] = maxIndex;
        }
    }

    for(var i = 0; i < nums.length; i++)
    {
        if(greater[i] !== -1 && smaller[i] !== -1)
        {
            return true;
        }
    }
    return false;

};

/**
 * Below is an optimised solution
 * We have 2 temporary value stores
 * If num1 is larger than curr, then num1 becomes curr
 * In the case that it isn't larger
 * We then verify if its larger than num2, then num2 becomes curr
 * and if it is bigger than both num1, and num2, then we have satisfied the subsequence
 * 
 * This is as we are constantly updating num1 and num2 when they are too large to be part of a valid subsequence
 * 
 * I find this tough to intuitively understand from first principles
 */

// int first = Int32.MaxValue;
// int second = Int32.MaxValue;

// for(int i = 0; i < nums.Length; i++)
// {
//     if(nums[i] <= first)
//         first = nums[i];
//     else if(nums[i] <= second)
//         second = nums[i];
//     else
//         return true;
// }
// return false;