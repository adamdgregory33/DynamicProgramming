/**
 * 
 * Given a target sum and an array of inputs, we want to return the shortest array with a combination of
 * the given input array that sums the target sum
 * 
 * If no sum is possible, return null
 */

const bestsum = (target, arr) =>
{
    if(target === 0) return [];
    if(target < 0) return null;

    // This for loop attempts all branches so we can interact with results out of this
    let shortestRes = null;

    for(let num of arr)
    {
        const remainder = target - num;

        const res = bestsum(remainder, arr);

        if(res !== null)
        {
            const completeRes = [...res, num];
            if(shortestRes === null || completeRes.length < shortestRes.length)
            {
                shortestRes = completeRes;
            }
        }
    }
    
    
    return shortestRes;
}
/**
 * m = target, n = num of elements in arr
 * Time complexity: 
 * DArr gives branching factor, with is the indicy of n
 * Iterate through the array gives linear factor m
 * so O(n ^ m * m)
 * 
 * 
 * Space complexity:
 * Begins with m calls deep, but each stack frame is also storing an array size m
 * O(m^m)
 * 
 */

console.log(bestsum(7 , [5,3,4,7])) // 7
console.log(bestsum(8 , [2,3,5  ])) // 3,5
console.log(bestsum(8 , [1, 4, 15 ])) //  4, 4
//console.log(bestsum(100 , [1,2,5,25])) //  25,25,25,25



const bestsummemo= (target, arr, memo = {}) =>
{
    //memo base case
    if(target in memo) return memo[target];

    //base case
    if(target === 0) return [];
    if(target < 0) return null;

    // This for loop attempts all branches so we can interact with results out of this
    let shortestRes = null;

    for(let num of arr)
    {
        const remainder = target - num;

        const res = bestsum(remainder, arr);

        if(res !== null)
        {
            const completeRes = [...res, num];
            if(shortestRes === null || completeRes.length < shortestRes.length)
            {
                shortestRes = completeRes;
            }
        }
    }

    // outside the loop as we want to store the shortest result
    memo[target] = shortestRes;
    return shortestRes;
}
/**
 * Time complexity is the same as initially brute force 
 * O(m * n * m)
 * 
 * Space is again O(m^2), this time space is held by the memo, not the largest stac frame array
 */


console.log(bestsummemo(7 , [5,3,4,7])) // 7
console.log(bestsummemo(8 , [2,3,5  ])) // 3,5
console.log(bestsummemo(8 , [1, 4, 15 ])) //  4, 4
console.log(bestsummemo(100 , [1,2,5,25])) //  25,25,25,25