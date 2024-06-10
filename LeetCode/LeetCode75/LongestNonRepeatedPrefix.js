
/**
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
    // If it is, we need to check that that string is not composed of a repeated
    var result = "";
    console.log("start");

    for(var i = 0; i <= str1.length; i++)
    {
        var prefix = str1.substring(0,i);
        console.log("Prefix: " + prefix);

        for(var j = 0; j <= str2.length; j++)
        {
            var subsectOfString = str2.substring(j, str2.length);
            console.log(subsectOfString);

            if(prefix.length < subsectOfString.length &&
             subsectOfString.substring(0, prefix.length) === prefix)
            {
                result = isRepeated(prefix);
            }            

        }
    }

    console.log("end");

    return result;
};

const isRepeated = function(str)
{
    console.log("here")
    for(var i = 1; i < str.length; i++)
    {
        var prefix = str.substring(0,i);
        if(prefix.repeat(str.length / prefix.length) === str )
        {
            return prefix;
        }
    }
    return str;
};


console.log(gcdOfStrings("ABCABC", "ABC"))