const countConstruct = (target = string, wordbank) =>
{
    const table = Array(target.length).fill(0);
    table[0] = 1;

    for(let i = 0; i < target.length; i++){
        if(table[i] > 0)
        {
            for(let word of wordbank)
            {
                if(target.slice(i, i+word.length === word))
                {
                    if(i+word.length <= target.length) table[i + word.length] += table[i];
                }
            }
        }
    }
    return table[word.length];
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2 
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "ska","sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent","enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee"
])); // 0