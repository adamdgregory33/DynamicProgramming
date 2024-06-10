/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // median of the two arrays is: either:
    // odd total nums = centre number (total length +1 / 2)
    // even = total length / 2 && +1 index
    var length1 = nums1.length;
    var length2 = nums2.length;
    
    var totalLength = length1 + length2;

    var isEven = totalLength % 2 === 0;
    var targetCentre = isEven ? totalLength / 2 : (totalLength+1) /2;

    // To make a single array, we step through 
    // EITHER array, so need a count for each
    // and just store what the current value is
    // whichever one is SMALLER we want to grab
    // if its even, we store the current and next value
    var count1 = 0;
    var count2 = 0;
    var curr = Number.NEGATIVE_INFINITY;
    var curr2 = Number.NEGATIVE_INFINITY;
    var isEnd = false;
    for(var i = 0; i < targetCentre; i++)
    {
        if((nums1[count1] >= curr && nums2[count2] >= nums1[count1] )
        || count2 === length2)
        {
            curr = nums1[count1];
            count1++;
        }
        else if((nums2[count2] >= curr && nums1[count1] >= nums2[count2])
        || count1 === length1)
        {
            curr = nums2[count2];
            count2++;
        }

        if(!isEnd && isEven && i === targetCentre-1)
        {
            targetCentre++;
            curr2 = curr;
            isEnd = true;
        }
    }

    return isEven ? (curr + curr2) / 2 : curr;
};