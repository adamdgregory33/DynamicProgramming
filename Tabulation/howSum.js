const howSum = (target, arr) =>
{
    const table = Array(taget+1).fill(null);
    
    // base case
    table[0] = [];

    for(let i = 0; i<target; i++)
    {
        if(table[i]!= null)
        {
            for(let num of arr)
            {
                if(i+num <= target) table[i+num] = [...table[i], num];
            }
        }
    }
    return table[target];

}


console.log(howsum(7,[1])) // 1,1,1,1,1,1,1,1
console.log(howsum(7,[3,5,9])) // null
console.log(howsum(7,[9])) // null
console.log(howsum(7,[3,2])) // 3,2,2

console.log(howsum(300,[7,14])) // 3,2,2