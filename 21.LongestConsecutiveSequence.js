/*
Longest Consecutive Sequence

[100,4,200,1,3,2] = > [1,2,3,4];
O(n) : Complexity 
Required complexity was O(n).Right now this program is using Set So time complexity is not what was required.
// Try to implement HashSet in place of a Set which will internally use HashMap.
*/

var SET = require('../Javascript-and-Data-Structure/DataStructure/Set'); 

function longestConsecutive(array){
	if(array.length==0){
		return 0;
	}

	var set = SET;

	//Array.prototype.push.apply(set,array);
	for(var i=0;i<array.length;i++){
		set.add(array[i]);
	}
	//console.log(array);
	//console.log(set.toString());
	
	var max = 1;

	for(var i=0;i<array.length;i++){
		var num = array[i];
		var left = num-1;
		var right = num+1;
		var count = 1;

		while(set.contains(left)){
			count++;
			set.remove(left);
			left--;
		}

		while(set.contains(right)){
			count++;
			set.remove(right);
			right++;
		}
		//console.log(count);
		max = Math.max(count,max);
	}
	return max;
}

console.log(longestConsecutive([100,4,200,1,3,2,6,7,5]));