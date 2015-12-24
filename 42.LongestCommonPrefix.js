/*
To solve this problem, we need to find the two loop conditions.
One is the length of the shortest string. The other is iteration over every element of the string array.
*/

function LongestCommonPrefix(array){
	if(array==undefined || array.length==0){
		return "";
	}

	var len = array.length;
	var min = Number.MAX_VALUE;
	
	for(var i=0;i<len;i++){
		min = Math.min(min,array[i].length);
	}

	if(min==0) return "";

	for(var j=0;j<min;j++){
		var prev = '0';

		for(var i=0;i<len;i++){
			if(i==0){
				prev = array[i][j];
			}
			if(array[i][j] != prev){
				return array[i].substring(0,j);
			}
		}
	}
	return array[0].substring(0,min);
};

var arr = ["Deepak","Deepal","De","Dee"];
console.log(LongestCommonPrefix(arr));
