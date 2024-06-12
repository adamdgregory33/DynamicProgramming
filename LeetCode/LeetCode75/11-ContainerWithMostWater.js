/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    // Without going through every combination
    // Pointers: One at left, one at right
    // Increment / decrement the smaller of the two each time
    // We take note of the max area at any given point

    var left = 0;
    var right = height.length -1;
    var maxArea = 0;


    while(left < right)
    {
        var leftSmaller = height[left] < height[right];
        var smallestHeight = leftSmaller ? height[left] : height[right];
        var area = smallestHeight * (right - left);
        if(area > maxArea)
        {
            maxArea = area
        }
        if(leftSmaller)
        {
            left++;
        }
        else
        {
            right--;
        }

    }
    return maxArea;
};