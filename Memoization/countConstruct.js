/**
 * 
 * Count the number of ways to construct a given input string given a wordbank
 * 
 * 
 */


const countConstruct = (target = string, wordbank) =>
{
    // Base Cases, no negative base case as we HAVE to traverse the entire tree
    if(target === '') return 1;

    let count = 0;
    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            const remainder = target.slice(word.length);
            const result = countConstruct(remainder, wordbank);
            if(result > 0 )
            {
                // We have to add the result, as otherwise on the top call we lose 
                // all of the results gathered in the lower branches executed
                count+= result;
            }
        }
    }
    return count;
}
/**
 * Time = O(n^m * m)
 * space = O(m^2)
 */

﻿

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2 
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "ska","sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent","enter", "ot", "o", "t"])); // 4
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeee",
//     "eeeeee"
// ])); // 0

const countConstructMemo = (target = string, wordbank, memo = {}) =>
{   
    // Base Case Memo
    if(target in memo) return memo[target];

    // Base Cases, no negative base case as we HAVE to traverse the entire tree
    if(target === '') return 1;


    let count = 0;
    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            const remainder = target.slice(word.length);
            const result = countConstruct(remainder, wordbank, memo);
            if(result > 0 )
            {
                // We have to add the result, as otherwise on the top call we lose 
                // all of the results gathered in the lower branches executed
                count+= result;
            }
        }
    }

    // YOU MEMO THE RETURN VALUE!
    memo[target] = count;
    return count;
}
/**
 * Time = O(n* m^2)
 * space = O(m^2)
 */


console.log(countConstructMemo('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2 
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstructMemo("skateboard", ["bo", "rd", "ate", "ska","sk", "boar"])); // 0
console.log(countConstructMemo("enterapotentpot", ["a", "p", "ent","enter", "ot", "o", "t"])); // 4
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); // 0