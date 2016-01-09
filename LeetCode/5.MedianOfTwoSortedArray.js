function findMedianSortedArray(array1,array2){
	var m = array1.length;
	var n = array2.length;

	if((m+n)%2!=0){
		return findKth(array1,array2,(m+n)/2,0,m-1,0,n-1);
	}
	else{
		return (findKth(array1,array2,(m+n)/2,0,m-1,0,n-1)+findKth(array1,array2,(m+n)/2-1,0,m-1,0,n-1))*0.5;
	}	
}

function findKth(A,B,k,aStart,aEnd,bStart,bEnd){
	var aLen = aEnd - aStart + 1;
	var bLen = bEnd - bStart + 1;

	if(aLen == 0){
		return B[bStart + k];
	}

	if(bLen == 0){
		return A[aStart+k];
	}

	if(k==0)
		return A[aStart]<B[bStart] ? A[aStart] : B[bStart];

	var aMid = aLen * k / (aLen+bLen);
	var bMid = k - aMid -1; 

	aMid = aMid + aStart;
	bMid = bMid + bStart;

	if(A[aMid] > B[bMid]){
		k = k - (bMid - bStart + 1);
		aEnd = aMid;
		bStart = bMid + 1;
	}
	else{
		k = k - (aMid - aStart + 1);
		bEnd = bMid;
		aStart = aMid + 1;
	}

	return findKth(A,B,k,aStart,aEnd,bStart,bEnd);
}

var median = findMedianSortedArray([4,5,6,7,8],[5,7,8,12,25]);
console.log(median);
