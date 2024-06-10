function mergeAlternately(word1: string, word2: string): string {
    var buffer = "";
    var i = 0;
    var length = word1.length > word2.length? word1.length : word2.length
    for(i; i < length; i++)
    {
        buffer+= word1.substring(i,i+1) + word2.substring(i,i+1);
    }

    return word2.length > i ? buffer+ word2.substring(i,word2.length) : buffer;
};
