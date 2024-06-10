/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    var max = 0;
    for(var i = 0; i < candies.length; i++)
    {
        if(candies[i] > max)
        {
            max = candies[i];
        }
    }
    var result = Array(candies.length).fill(false);
    for(var i = 0; i < candies.length; i++)
    {
        if(candies[i] + extraCandies >= max)
        {
            result[i] = true;
        }
    }    
    return result;
};