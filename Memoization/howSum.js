/**
 * 
 * Given a target sum and an array of inputs, we want to return an array with a combination of
 * the given input array that sums the target sum
 * 
 * If no sum is possible, return null
 */

const howsum = (target, arr) =>
{
    // if we reach the target sum, we need to return an array to be able to add the
    // numbers in the path to said array to
    if(target === 0)return []; 
    if(target < 0 ) return null;

    for(let num of arr)
    {
        const remainder = target - num;
        const res = howsum(remainder, arr)
        if(res !== null)
        {
            return [...res, num];
        }
    }
    return null;
}
/**
 * n = target sum, m = number of items in arr
 * Time complexity is again n ^ m, but we also have to iterate through m times to expand the array
 * So we get O( n ^ m * m )
 * 
 * Space complexity is O(m)
 */

console.log(howsum(7,[1])) // 1,1,1,1,1,1,1,1
console.log(howsum(7,[3,5,9])) // null
console.log(howsum(7,[9])) // null
console.log(howsum(7,[3,2])) // 3,2,2

console.log(howsum(300,[7,14])) // 3,2,2

const howsummemo = (target, arr, memo = {}) =>
{
    // Memo base cases
    if(memo[target]) return memo[target];

    // if we reach the target sum, we need to return an array to be able to add the
    // numbers in the path to said array to
    if(target === 0)return []; 
    if(target < 0 ) return null;

    for(let num of arr)
    {
        const remainder = target - num;
        const res = howsum(remainder, arr)
        if(res !== null)
        {
            memo[target] = [...res, num];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
}
/**
 * n = target sum, m = number of items in arr
 * Time complexity  is n * m, but then * m again as we have to iterate through the array of potential size m
 * so O(n * m * m)
 * 
 * Space complexity.
 * 
 * This will be O (m) at best
 * Max length of memo is m, m keys in the object, so O (m * m)
 */

console.log(howsummemo(7,[1])) // 1,1,1,1,1,1,1,1
console.log(howsummemo(7,[3,5,9])) // null
console.log(howsummemo(7,[9])) // null
console.log(howsummemo(7,[3,2])) // 3,2,2

console.log(howsummemo(300,[7,14])) // 3,2,2