/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u', 'A','E','I','O','U'];

    // we want to add the vowels to two arrays
    // we then traverse one forwards, one backwards
    // insert the characters based on this
    var match = [];
    var index = [];

    if(s === '') return '';

    var charArray = s.split('');

    var count = 0;

    for(var char of charArray)
    {
        if(vowels.includes(char))
        {
            match = [...match, char];
            index = [...index, count];
        }
        count++;
    }

    for(var i = 0; i < match.length; i++)
    {
        var reverse = match.length - 1 - i;
        charArray[index[i]] = match[reverse];
    }
    return charArray.join('');
};
// Above works for small string inputs ; clear what its doing


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u', 'A','E','I','O','U'];
    var charArray = Array.from(s);

    // to save loops, we increment up to find a vowel
    // when we find one, we decrement a second loop to find a vowel
    // we then swap the two
    // We only want to run to the midpoint -- Not valid assumption!
    var midpoint = charArray.length / 2;
  
    var reversePoint = charArray.length -1;
    var oddAdjust = charArray.length % 2 === 0 ? 0 :1;

    for(var i = 0; i<= charArray.length; i++)
    {
        var innerchar = charArray[i];
        if(vowels.indexOf(innerchar) >= 0)
        {
            for(var j = reversePoint; j > i; j--)
            {
                var outerchar = charArray[j];
                if(vowels.indexOf(outerchar) >= 0){
                    charArray[i] = outerchar;
                    charArray[j] = innerchar;
                    reversePoint = j - 1;
                    break;                  
                }
            }
        }
    }

    return charArray.join('');
};