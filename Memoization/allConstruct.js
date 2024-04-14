/**
 * 
 * Given target word and array of words, return all ways that you can create the target word
 * using the wordbank, re-use is allowed
 * 
 * 
 */

const allConstruct = (target = string, wordbank) =>
{
    // Base case - inner array 
    if(target === '') return [[]];// we use a 2d array return
    // no negative case as we simply do not store these combinations?

    // result - outer array
    let result = [];
    
    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            const remainder = target.slice(word.length);
            const suffixWays = allConstruct(remainder, wordbank);
            
            // we need to add each word to the start of the arrays returned
            const targetways = suffixWays.map(way => [word, ...way]);
            result.push(...targetways);
            
        }
    }
    return result;
}
/**
 * Time O(n^m)
 * space: O(m) for call stack only
 * 
 */

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ // ['purp', 'le' ], // ['p', 'ur', 'p', 'le' ] // ] 
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // [ // [ 'ab', 'cd', 'ef' ], // [ 'ab', 'c', 'def' ], // [ 'abc', 'def' ], // [ 'abcd', 'ef' ] // ] 
console.log(allConstruct("skateboard", ["bo", "rd", "ate","ska", 'sk', "boar"]));  // [] 
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", 'aa', 'aaa', "aaaa", "aaaaa"])); // []


const allConstructMemo = (target = string, wordbank, memo = {}) =>
{
    if(target in memo) return memo[target];
    // Base case - inner array 
    if(target === '') return [[]];// we use a 2d array return
    // no negative case as we simply do not store these combinations?

    // result - outer array
    let result = [];
    
    for(let word of wordbank)
    {
        if(target.indexOf(word) === 0)
        {
            const remainder = target.slice(word.length);
            const suffixWays = allConstructMemo(remainder, wordbank, memo);
            
            // we need to add each word to the start of the arrays returned
            const targetways = suffixWays.map(way => [word, ...way]);
            result.push(...targetways);
            
        }
    }
    memo[target] = result;
    return result;
}