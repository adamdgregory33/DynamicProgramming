

const fib = (n) =>
{
    const table = Array(n-1).fill(0);

    table[1] = 1;
    for(let i = 0; i <= n; i++)
    {
        table[i+1] += table[i];
        table[i+2] += table[i];
    }
    return table[n];
}

console.log(fib(0))
console.log(fib(2))
console.log(fib(3))
console.log(fib(5))
console.log(fib(10))
console.log(fib(30))
console.log(fib(40))