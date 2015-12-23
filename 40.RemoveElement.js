/*
Remove Duplicates from an array.
*/

function removeElement(array,elem){
	var index=0;
	for(var i=0;i<array.length;i++){
		if(array[i]!=elem){
			array[index++] = array[i];
		}
	}
	
	array.splice(index,array.length);

	console.log(array);
};

removeElement([1,2,3,1,1,1,1,4,5,1],1);