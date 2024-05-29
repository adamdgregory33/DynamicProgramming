/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    var charArray = Array.from(s);
    var wordFlag = false;
    var tempword = "";
    var result = "";
    for(var i = 0 ; i < charArray.length; i++)
    {
        var char = charArray[i];
        if(char !== " " && !wordFlag)
        {
            tempword = tempword + char;
            wordFlag = true;
        }
        else if(wordFlag && char !== " ")
        {
            tempword = tempword + char;
        }
        else if(wordFlag && ( char === " " || i === charArray.Length-1))
        {
            result = tempword + " " + result;
            tempword = "";
            wordFlag = false;
        }
    }
    if(tempword !== "")
    {
        result = tempword + " "+ result;
    }
    result = result.trim();
    return result;
};