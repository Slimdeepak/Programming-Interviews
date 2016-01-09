function containsDuplicate1(array){
	var map = {};
	for(var i=0;i<array.length;i++){
		if(map[array[i]] == undefined){
			map[array[i]] = true;
		}
		else{
			return true;
		}
	}
	return false;
};

console.info(containsDuplicate1([1,2,3,4,5]));

/*
Given an array and an integer k , return true if and only if there are two indices i and j in array
such that difference between i and j is at most k.
*/

function containsDuplicate2(array,k){
	var map = {};
	var min =  Number.MAX_VALUE;
	for(var i=0;i<array.length;i++){
		if(map[array[i]]!=undefined){
			var preIndex = map[array[i]];
			var diff = i - preIndex;
			min = Math.min(diff,min);
		}
		else{
			map[array[i]] = i;
		}
	}

	if(min<=k){
		return true;
	}
	else{
		return false;
	}
}

console.info(containsDuplicate2([1,2,3,4,5,4],3));