/**
 * Problem statement, we are given an input of a target number and an array of numbers
 * Can we sum the target number using the array of numbers?
 * 
 * Numbers in the array can be re-used
 */


/**
 * First input is target sum
 * We loop through the array, and subtract each value from
 * We recurse using this remainder, again subtracting from each of the array
 * Repeat 
 * 
 * Base case, if n is 0 return true, if less than 0 return false
 */
const canSum  = (n, arr) =>
{
    if(n === 0) return true;
    if(n < 0) return false;

    for(var num of arr)
    {
        const remainder = n - num;
        if(canSum(remainder, arr))
        {
            return true;
        }
    }
    return false;
}

console.log(canSum(7,[1])) //true
console.log(canSum(7,[3,5,9])) //false
console.log(canSum(7,[9])) //false
console.log(canSum(7,[3,2])) //true


/**
 * Time complexity analysis: number of nodes: you have i numbers in the array of numbers
 * Smallest number could be 1, which gets called n times
 * With no memoization, you loop through every number in the array too
 * so i ^ n
 * 
 * Travelling between depths multiples the call by the number of nodes in that ;ayer (i nodes per layer, n times)!!!
 * 
 * Space complexity, it gets called n times in depth; at any given time you are executing 1 branch to get the result
 * so is O(n) (max depth of the tree)
 */

const canSumMemo  = (n, arr, memo = {}) =>
{
    if(n in memo) return memo[n];
    if(n === 0) return true;
    if(n < 0) return false;

    for(var num of arr)
    {
        const remainder = n - num;
        if(canSumMemo(remainder, arr, memo))
        {
            memo[n] = true;
            return true;
        }
    }

    memo[n] = false;
    return false;
}

console.log(canSumMemo(7,[1])) //true
console.log(canSumMemo(7,[3,5,9])) //false
console.log(canSumMemo(7,[9])) //false
console.log(canSumMemo(7,[3,2])) //true

/**
 * NOw we have no repeats of numbers in array. If target sum is n and array size is i
 * at most, we would be calling m depth, and calling this m depth i times each depth = i * m
 * 
 * Time complexity O(i *m)
 * 
 * Space is the same, with maximum of n depth, so O(n)
 */