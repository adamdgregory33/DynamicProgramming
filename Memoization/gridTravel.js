// Problem:
// m by n grid, can only go down or right, how many ways to do this are there?

// time complexity  O(2 ^ (m + n))
// space complexity O (m + n)


/**
 * 
 *Time complexity is number of nodes in a tree, so draw the tree!
    Depth of tree, draw it, and trace down to a desired base case

    This case, depth is n + m, and each node has 2 children (1 for each argument in this case)

    So we have 2 ^  n+m time complexity
 */
const gridTravel = (m, n) =>
{
    if(m == 0 || n == 0) return 0;
    if(m == 1 || n == 1) return 1;

    return gridTravel(m-1, n) + gridTravel(m, n-1);
}

start = Date.now();
console.log(gridTravel(1,1))
console.log(gridTravel(3,7))
console.log(gridTravel(20,5))
console.log(gridTravel(30,4))
console.log(gridTravel(15,15))
console.log(gridTravel(25,10))
console.log(gridTravel(17,17))
console.log(gridTravel(100,5))

console.log("TimeElapsed " + (start - Date.now()))

/**
 * 
 * For Memoization
 * [---]
 * [---]
 * [---]
 * 
 * if we go down we have gridtravel (m-1, n) left (see below)
 * [---]
 * [---]
 * 
 * 
 * if we go right we have gridtravel (m, n-1) left (see below)
 * [--]
 * [--]
 * [--]
 * 
 */



const gridTravelMemo = (m, n, memo = {}) =>
{
    const delimier = ",";
    const newKey = m + delimier+ n;

    Object.keys(memo).forEach(function(key){
        var arr = key.split(delimier);
        if(arr[0]  === m && arr[1] === n)
        {
            return memo[m+delimier+n]
        }
        if(arr[0]  === n && arr[1] === m)
        {
            return memo[n+delimier+m] 
        }
    })

    if(m == 0 || n == 0) return 0;
    if(m == 1 || n == 1) return 1;

    memo[newKey] = gridTravel(m-1, n, memo) + gridTravel(m, n-1, memo);
    return memo[newKey];
}

start = Date.now();
console.log(gridTravelMemo(1,1))
console.log(gridTravelMemo(3,7))
console.log(gridTravelMemo(20,5))
console.log(gridTravelMemo(30,4))
console.log(gridTravelMemo(15,15))
console.log(gridTravelMemo(25,10))
console.log(gridTravelMemo(17,17))
console.log(gridTravelMemo(100,5))
console.log("TimeElapsed " + (start - Date.now()))