

const fib = (n, memo = {}) =>
{
    // Base case 1, 1 
    if (n <= 2) return 1;

    return fib(n-1) + fib(n-2);
}
// Case 5
// O(2^n) time complexity 
// O(n) space complexity

var start = Date.now();
console.log(fib(0))
console.log(fib(2))
console.log(fib(3))
console.log(fib(5))
console.log(fib(10))
console.log(fib(30))
console.log(fib(40))
console.log("TimeElapsed " + (start - Date.now()))

const memofib = (n, memo = {}) =>
{
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = memofib(n-1, memo) + memofib(n-2, memo);
    return memo[n];

}
// O(n) time complexity
// O(n) space complexity

start = Date.now();
console.log(memofib(0))
console.log(memofib(2))
console.log(memofib(3))
console.log(memofib(5))
console.log(memofib(10))
console.log(memofib(30))
console.log(memofib(40))
console.log("TimeElapsed " + (start - Date.now()))
