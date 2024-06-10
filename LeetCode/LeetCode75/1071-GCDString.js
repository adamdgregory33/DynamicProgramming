
/**
 * This code is NOT optmisied as it stands, and remains as a proof of logic more than
 * an optimisation exercise
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    if(str1.length > str2.length)
    {
        return gcdOfStrings(str2, str1)
    }

    // We need to: Check that the shorter string (str1) is a substring of the longer string (str2)
    // We check if the shorter string is a substring of the second
    // if it is, we repeat it to verify that it can form the string target
    var result = "";

    for(var i = 0; i <= str1.length; i++)
    {
        var prefix = str1.substring(0,i);
        var isValid = canFormResult(prefix, str1);
        if( isValid !== "")
        {
            if(str2.substring(0, prefix.length) === prefix)
            {
                var isValid = canFormResult(prefix, str2);
                if( isValid !== "")
                {
                    result = isValid;
                }
            }   
        }             
    }

    return result;
};

const canFormResult = function(prefix, target)
{

    if(prefix !== "" &&
        prefix.repeat(target.length / prefix.length) === target )
    {
        return prefix;
    }
    
    return "";
};