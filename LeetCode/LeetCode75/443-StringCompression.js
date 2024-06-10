/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    var index = 0;
    var count = 0;
    var temp = chars[0];

   for(var char of chars)
   {
       if(char === temp)
       {
           count++;
       }
       else
       {
           chars[index] = temp;
           index++;
           var numSplit = Array.from(''+count);
           for(var i of numSplit)
           {
               if(!(numSplit.length === 1 && i === '1'))
               {
                   chars[index] = i;
                   index++;
               }
           }

           count = 1;
           temp = char;
       }
   }

   chars[index] = temp;
   index++;
   var numSplit = Array.from(''+count);
   for(var i of numSplit)
   {
       if(!(numSplit.length === 1 && i === '1'))
       {
           chars[index] = i;
           index++;
       }
   }
   return index;
   
};