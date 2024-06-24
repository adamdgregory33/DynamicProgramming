/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    var maxHeight = 0;
    var currentHeight = 0;
    for(var i = 0; i < gain.length; i++)
    {
        currentHeight += gain[i];
        if(currentHeight > maxHeight)
        {
            maxHeight = currentHeight;
        }
    }
    return maxHeight;
};