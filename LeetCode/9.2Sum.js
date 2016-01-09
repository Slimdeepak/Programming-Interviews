/*function twoSum(array,target){
	var map = {};
	for(var i=0;i<array.length;i++){
		map[array[i]] = true;
	}
	console.log(map);

	for(var i=0;i<array.length;i++){
		if(map[target-array[i]] == true){
			console.log(array[i]+" ---- "+(target-array[i])+" ---- "+target);
		}
	}
}
*/

/*
Program to find a pair in an array which sums to a given target element. O(n)

@input array and a target sum

@output indices of element which forms the sum.

*/

function twoSum(array,target){
	var map = {};
	var result = [];

	for(var i=0;i<array.length;i++){
		if(map[array[i]]!=undefined){
			var index = map[array[i]];
			result[0] = index+1; 
			result[1] = i+1;
		}
		else{
			map[(target-array[i])] = i;
		}
	}
	console.log(result);
}



var arr = [1,3,5,7,9];
var target = 16;
twoSum(arr,target);