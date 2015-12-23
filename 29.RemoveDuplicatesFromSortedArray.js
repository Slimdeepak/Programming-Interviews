/*
This function remove duplicate from a sorted array.
*/

function removeDuplicates(array){
	var index =0;
	var pre = array[0];

	for(var i=1;i<array.length;i++){
		if(pre == array[i]){
			//do nothing
		}
		else{
			array[index++] = pre;
			pre = array[i];
		}
	}
	array[index++] = pre;

	array.splice(index,array.length-index);
	console.log(array);
}


/*
It counts the number of unique element in an array.
*/

function countNumberOfUniqueElements(array){
	var count = 0;
	for(var i=0;i<array.length-1;i++){
		if(array[i] == array[i+1]){
			count++;
		}
	}
	return array.length-count;
}




var array = [1,2,3,4,5,5,5,5,6,7,7,8,8];
removeDuplicates(array);
console.log(countNumberOfUniqueElements(array));
