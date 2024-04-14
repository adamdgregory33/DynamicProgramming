const canConstruct = (target = string, wordbank) =>
{
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for(let i = 0; i< target.length+1; i++)
    {
        if(table[i])
        {
            for(let word of wordbank)
            {
                // if the current index is reachable,
                // and the current word in the word bank is a prefix of the current word sliced from current index to + length of word
                // then the suffix of the remaining string is reachable, hence we can continue
                if(target.slice(i, i+word.length) === word)
                {
                    if(i+word.length <= target.length) table[i+word.length] = true;
                }
            }
        }

    }
    return table[target.length];
}


console.log(canconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true 
console.log(canconstruct("skateboard", ["bo","rd", "ate", "t", "ska", "sk","boar"])); // false
console.log(canconstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
"e",
"ee",
"eee",
"eeee",
"eeeee",
"eeeeee"
])); // false