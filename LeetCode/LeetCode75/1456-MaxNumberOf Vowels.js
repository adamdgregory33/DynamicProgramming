/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = ['a','e','i','o','u'];
    
    var chars = Array.from(s);
    var maxVowels = 0;
    var vowelCount = 0

    var tempChar = chars[0];

    var count = 0;

    while(count < s.length)
    {
        if(count < k)
        {
            var char = chars[count];
            if(vowels.indexOf(char) > -1)
            {
                vowelCount++;
                maxVowels = vowelCount;
            }
        }
        else
        {
            var char = chars[count];
            if(vowels.indexOf(char) > -1)
            {
                vowelCount++;
            }
            if(vowels.indexOf(tempChar) > -1)
            {
                vowelCount--;
            }
            tempChar = chars[count - k + 1];
        }
        if(maxVowels >= k)
        {
            return k;
        }
        if(vowelCount > maxVowels)
        {
            maxVowels = vowelCount;
        }
        count++;
    }
    return maxVowels > k ? k : maxVowels;
};