const gridTravel = (m,n) =>
{
    const table = Array(m+1)
    .fill(0)
    .map(() => Array(n + 1).fill(0) )

    // base case
    table[1][1] = 1;


    for(let i = 0; i < m +1; i++)
    {
        for(let j= 0; j < n +1; j++)
        {
            const current = table[i][j];
            if(j+1 <= n) table[i][j+1] += current;

            if(i+1 <= m) table[i+1][j] += current;
        }

    }
    return table[m][n];
}

console.log(gridTravel(1,1))
console.log(gridTravel(3,7))
console.log(gridTravel(20,5))
console.log(gridTravel(30,4))
console.log(gridTravel(15,15))
console.log(gridTravel(25,10))
console.log(gridTravel(17,17))
console.log(gridTravel(100,5))