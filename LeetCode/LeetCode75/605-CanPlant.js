/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) 
{
    var length = flowerbed.length;

    if(length === 1 && flowerbed[0] === 0 ) return n <= 1;
    if(length === 2 && flowerbed[0] === 0  && flowerbed[1] === 0  ) return n <= 1;

    var canPlant = 0;
    for(var i = 1; i < length-1; i++)
    {
        if(i === 1 && flowerbed[0] === 0  && flowerbed[1] === 0  )
        {
            canPlant++;
            flowerbed[0] = 1;
        }
        
        if(flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0)
        {
            canPlant++;
            flowerbed[i] = 1;
        }
        
        if(i === length-2 && flowerbed[length-2] === 0  && flowerbed[length-1] === 0  )
        {
            canPlant++;
            flowerbed[length] = 1;
        }
    }
    return canPlant >= n;
};