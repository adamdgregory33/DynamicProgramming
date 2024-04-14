/**
 * Can we
 * Generate a target - string
 * Given an bank of words
 * 
 * Re-use allowed
 * 
 * 
 */

const canconstruct = (target = string, wordbank) =>
{
    // Base case
    if(target === '') return true;

    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            let remainder = target.slice(word.length);
            if( canconstruct(remainder, wordbank) )
            {
                return true;
            }
        }
    }  
    return false;
}
/**
 * We do not remove from the middle of the target string as this would create
 * a new "target" string
 * For consistency, only match if the word bank item matches as a prefix, and go from there
 * This means we explore the entire tree and do not miss combinations
 * 
 * Time Complexity: We need to consider the length of the return value 
 * 
 * n = num char, m = length target
 * 
 * We call Worst case, each item in bank is 1 character, and we have target of length m
 * 
 * so call would be n times (for each single character) on a given tree level for each of the items on the word bank
 * m layers if reducing target size by 1 character each time
 * 
 * Slicing the string has a time value of lenth of string ie n
 * 
 * 
 * so Time is O(n ^ m ) * m)
 * 
 * Space complexity is:
 * 
 * m stack calls, and then slice requires us to store remainder as m length
 * So O (m * m)
 */



console.log(canconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true 
console.log(canconstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"])); // false
console.log(canconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
// console.log(canconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
// "e",
// "ee",
// "eee",
// "eeee",
// "eeeee",
// "eeeeee"
// ])); // false


const canconstructmemo = (target = string, wordbank, memo = {}) =>
{
    // Base case memo
    if(target in memo) return memo[target];

    // Base case
    if(target === '') return true;

    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            let remainder = target.slice(word.length);
            if( canconstructmemo(remainder, wordbank, memo) )
            {
                memo[target] = true;

                return true
            }
        }
    }  
    memo[target] = false;

    return false;
}
/**
 * n = length of target string
 * m = number of items in wordbank
 * 
 * Time = O(n * m^2)
 * Space = O (M^2) still
 * 
 */

console.log(canconstructmemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true 
console.log(canconstructmemo("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"])); // false
console.log(canconstructmemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canconstructmemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
"e",
"ee",
"eee",
"eeee",
"eeeee",
"eeeeee"
])); // false