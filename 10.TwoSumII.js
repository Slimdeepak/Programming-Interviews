/*
Given a sorted array and a target . Find a pair with given sum .

Two Pointer Technique.
*/

function TwoSumSortedArray(arr,target){
	var result =[];
	var start = 0;
	var end = arr.length-1;
	
	while(start<end){
		if(arr[start]+arr[end]>target){
			end--;
		}
		else if(arr[start]+arr[end]<target){
			start++;
		}
		else{
			result.push(start);
			result.push(end);
			break;
		}
	}
	console.log(result);
};


var array = [1,2,3,4,5,6,7,8,9];
var target = 3;

TwoSumSortedArray(array,target);