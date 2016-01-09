/*
A peak element is one,which id larger than its neighbour.

*/

function peakElement(array){
	

	for(var i=0;i<array.length;i++){
		
		var prev = array[i-1] || Number.MIN_VALUE;
		var current = array[i];
		var next = array[i+1] || Number.MIN_VALUE;

		console.log(prev +"  "+current+"  "+next);

		if(current >= prev && current >= next){
			return current;
		}
	
	}
	return -1;
}

console.log(peakElement([1,2,2,1,1]));