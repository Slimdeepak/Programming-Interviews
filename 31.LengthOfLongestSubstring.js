/*

A program to calculate length of longest substring without repeating characters.
Length of longest Substring in a string : 0(n^3) . Very Slow Implementation
*/

function LengthOfLongestSubstring1(str){
	var map = {};
	var max = Number.MIN_VALUE;

	for(var i=0;i<str.length-1;i++){
		for(var j=i+1;j<=str.length;j++){
			if(uniqueCharacter(str.substring(i,j))){
				var len = j-i;
				max = Math.max(max,len);
			}	
		}
	}
	return max;
};

function uniqueCharacter(str){
	console.log(str);
	var obj = {};

	for(var i=0;i<str.length;i++){
		if(obj[str[i]]==undefined){
			obj[str[i]] = true;
		}
		else{
			return false;
		}
	}
	return true;
}


/*
Another function to calculate length of longest substring without repeating characters.
*/
function lengthOfLongestSubstring2(str){
	var pre = 0;
	var map = {};

	for(var i=0;i<str.length;i++){
		if(map[str[i]]==undefined){
			map[str[i]] = i;
		}
		else{
			pre = Math.max(Object.keys(map).length,pre);
			i = map[str[i]];
			map ={};
		}
	}
	return Math.max(pre,Object.keys(map).length);
}


console.log(lengthOfLongestSubstring2("dadedcab"));

//console.log(LengthOfLongestSubstring("abacdabce"));
