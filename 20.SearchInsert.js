/*
Given a sorted array and a target value , return the index if target is found. 
If not return the index where it would be if it were inserted in order.
(No duplicates in array)
*/

function searchInsert(array,target){
	if(array == undefined || array.length==0){
		return -1;
	}
	var start = 0;
	var end = array.length-1;
	return searchIndex(array,target,start,end);
}

function searchIndex(array,target,start,end){
	var mid = Math.floor((start+end)/2);
	if(target==array[mid]){
		return mid;
	}
	else if(target<array[mid]){
		return start<mid ? searchIndex(array,target,start,mid-1) : start;
	}
	else{
		return end>mid ? searchIndex(array,target,mid+1,end) : (end+1);
	}
}

console.log(searchInsert([1,3,5,6,9],10));

