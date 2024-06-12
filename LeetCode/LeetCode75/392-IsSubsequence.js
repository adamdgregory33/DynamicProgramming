/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    // Pointer for t outer loop
    // pointer for s, if equals t and s, increment both
    // if substring pointer is at length of substring and theyre equal, return true
    // if they are not equal,t pointer increment
    // Once we have found one letter in s, we do not need to reset and attempt to find again
    // so continuing and not resetting s pointer works for this problem case
    if(s === "") return true;


    var outer = 0;
    var inner = 0;

    while(outer < t.length)
    {
        if(s.slice(inner, inner+1) === t.slice(outer, outer + 1))
        {
            outer++;
            inner++;
            if(inner === s.length)
            {
                return true;
            }
            continue;
        }
        if(s.slice(inner, inner+1) !== t.slice(outer, outer + 1))
        {
            outer++;
            continue;
        }
    }
    return false;
    
};