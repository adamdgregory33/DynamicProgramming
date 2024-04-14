const allConstruct = (target = string, wordbank) =>
{
    const table = Array(target.length +1).fill().map( () => []);
    // Base case
    table[0] = [[]];

    for(let i = 0; i < target.length; i++)
    {   
        for(let word of wordbank)
        {
            if(target.slice(i, i+word.length) === word)
            {
                for(let arr of table[i])
                {
                    if(i+word.length <= target.length) table[i+word.length].push([...arr, word]);
                }
            }
        }
        
    }
    return table[target.length];
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ // ['purp', 'le' ], // ['p', 'ur', 'p', 'le' ] // ] 
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); // [ // [ 'ab', 'cd', 'ef' ], // [ 'ab', 'c', 'def' ], // [ 'abc', 'def' ], // [ 'abcd', 'ef' ] // ] 
console.log(allConstruct("skateboard", ["bo", "rd", "ate","ska", 'sk', "boar"]));  // [] 
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", 'aa', 'aaa', "aaaa", "aaaaa"])); // []