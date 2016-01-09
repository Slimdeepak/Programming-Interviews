/**
This function calculates the minimum element in rotated sorted array.BINARY SEARCH
**/

function findMinimumInRotatedSortedArray(arr){
	var lo = 0;
	var hi = arr.length-1;
	if(arr[lo]<arr[hi]){
		return arr[lo];
	}

	var N = arr.length;

	var mid=0,next=0,prev=0;

	while(lo<=hi){

		mid = Math.floor((lo+hi)/2);
		next = (mid+1)%N;
		prev = ((mid-1)+N)%N;

		//console.log(prev+"  "+mid+ "  "+next);

		if(arr[mid]<arr[next] && arr[mid]<arr[prev]){
			return arr[mid];
		}
		else if(arr[mid]>arr[hi]){
			lo = mid+1;
		}
		else{
			hi = mid-1;
		}
	}
	return -1;
};


console.log(findMinimumInRotatedSortedArray([14,16,1,5,6,7,8]));


//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16