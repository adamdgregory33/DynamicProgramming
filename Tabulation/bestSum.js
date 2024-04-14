const bestSum = (target,arr) =>
{
    const table = Array(target+1).fill(null);

    table[0] = [];
    for(let i = 0; i < target +1; i++)
    {
        if(table[i] !== null)
        {
            for(let num in arr)
            {
                const combination = [...table[i], num];
                if(i+num < target+1)
                {
                    // Shortest combo is the best combo, so add the shortest
                    if( table[i+num] || combination.length < table[i+num].length)
                    {
                        table[i+num] = [...table[i], num]
                    }
                } 
            }
        }
    }
    return table[target];
}

console.log(bestsum(7 , [5,3,4,7])) // 7
console.log(bestsum(8 , [2,3,5  ])) // 3,5
console.log(bestsum(8 , [1, 4, 15 ])) //  4, 4
//console.log(bestsum(100 , [1,2,5,25])) //  25,25,25,25