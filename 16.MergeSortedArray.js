


function MergeSortedArray(A,m,B,n){
	var i = m-1;
	var j = n-1;

	var k = m+n-1;

	while(k>=0){
		if(j<0 || (i>=0 && A[i]>B[j])){
			A[k--] = A[i--];
		}
		else{
			A[k--] = B[j--];
		}
	}
	console.log(A);
};

var m = 5;
var n = 4;

var A = [1,2,3,5,9];
var B = [4,7,9,11];
MergeSortedArray(A,m,B,n);