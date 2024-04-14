Dynamic Programming Course exercises by FreeCodeCamp.org
https://www.youtube.com/watch?v=oBt53YbR9Kk

General Dynamic Programming Strategies:
- Notice Overalpping Subproblems
- Decide on trivially smallest input
- Recursion -> memoisation
- Iteratively -> Tabulation
- Pen to paper drawing your strategy first, not code!


Memoization Recipe:
- Visualise as tree
- Brute force first
- Save the output of the function to a memo object
- Lookup the memo object on entry to the function

Tabulation Recipe:
- Visualise problem as a table
- size table based on inputs
- initialise table with default values
- seed trivial answer into the table
- iterate through the table
- fill further positions based on current position
