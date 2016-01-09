function rotateArray(array,amount){
	try{
		if(array == undefined || amount == undefined){
			throw new Error("Input Error");
		}
		if(amount<1){
			throw new Error("Amount should be positive");
		}

		reverseArray(array, 0, array.length-amount-1);
		reverseArray(array, array.length-amount, array.length-1);
		reverseArray(array, 0, array.length-1);
		return array;
	}
	catch(e){
		console.log(e);
	}
};


function reverseArray(array,lo,hi){
	while(lo<hi){
		swap(array,lo,hi);
		lo++;
		hi--;
	}
};

function swap(array,lo,hi){
	var temp = array[lo];
	array[lo] = array[hi];
	array[hi] = temp;
};

console.log(rotateArray([1,2,3,4,5],4));