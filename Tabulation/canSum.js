const cansum = (n , arr) =>
{
    const table = Array(n +1).fill(false);
    //base case
    table[0] = true;

    for(let i = 0; i < n+1; i++)
    {   
        if(table[i] === true)
        {
            for(let num of arr)
            {
                if(i+num < n) table[i+num] = true;
            }
        }

    }
    return table[n];
}


console.log(canSum(7,[1])) //true
console.log(canSum(7,[3,5,9])) //false
console.log(canSum(7,[9])) //false
console.log(canSum(7,[3,2])) //true