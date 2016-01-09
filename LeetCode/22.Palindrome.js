/*
Ignore cases and consider only alphanumeric keys
*/


var STACK = require('../Javascript-and-Data-Structure/DataStructure/Stack'); 
function isPalindrome(name){
	var desired = name.replace(/[^\w\s]/gi, '')
	var stack = new STACK;
	var len = desired.length;
	var index = 0;

	console.log(desired);
	while(index<Math.floor(len/2)){
		stack.push(desired[index]);
		index++;
	}

	if(len%2==1){
		index++;
	}

	//console.log(index);
	//console.log(stack);

	while(index<len){ 

		
		if(stack.isEmpty()){
			return false;
		}

		var temp = stack.pop();
		
		if(temp!==desired[index]){
			return false;
		}

		else{
			index++;
		}
	}
	return true;
};



function isPalindrome2(name){
	var desired = name.replace(/[^\w\s]/gi, '')
	var stack = new STACK;
	var len = desired.length;
	var index = 0;

	for(var i=0;i<desired.length;i++){
		if(desired[i] != desired[len-i-1]){
			return false;
		}
	}
	return true;
};


console.log(isPalindrome2("1234deed4321(*&^%$"));