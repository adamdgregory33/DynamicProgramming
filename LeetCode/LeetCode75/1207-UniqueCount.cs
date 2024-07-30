public class Solution {
    public bool UniqueOccurrences(int[] arr) {

        var dic = new Dictionary<int, int>();
        foreach(var num in arr)
        {
            if(dic.Keys.Contains(num))
            {
                var temp = dic[num];
                temp++;
                dic[num] = temp;
            }
            else
            {
                dic.Add(num, 1);
            }
        }
        var map = new HashSet<int>();
        foreach(var key in dic.Keys)
        {
            var count = dic[key];
            if(!map.Contains(count))
            {
                map.Add(count);
            }
            else
            {
                return false;
            }
        }
        return true; 
    }
}