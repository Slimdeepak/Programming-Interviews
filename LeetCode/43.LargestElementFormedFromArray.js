function LargestElementFormedFromArray(array){
	
	console.log(array);

	var largestSum = "";

	array.sort(function(a,b){
		var sum1 = a+""+b;
		var sum2 = b+""+a;

		return sum2-sum1;
	});

	for(var i=0;i<array.length;i++){
		largestSum += ""+array[i];
	}

	//console.log(array);
	return largestSum;
};

console.log(LargestElementFormedFromArray([455,9,34,23,89]));