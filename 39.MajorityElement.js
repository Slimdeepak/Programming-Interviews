/*
Using Sorting.
*/

function MajorityElement1(array){
	array.sort(function(a,b){
		return a-b;
	});
	//console.log(array);
	return array[Math.floor(array.length/2)];
};

/*
Using Hashing
*/

function MajorityElement2(array){
	var map ={};
	for(var i=0;i<array.length;i++){
		if(map[array[i]]==undefined){
			map[array[i]] = 1;
		}
		else{
			map[array[i]] = map[array[i]]+1;
		}	
	}
	for(var key in map){
		if(map[key]>Math.floor(array.length/2)){
			return key;
		}
	}
	//console.log(map);
	return -1;
};

console.log(MajorityElement2([1,2,3,4,2,2,2]));
console.log(MajorityElement1([1,2,3,4,2,2,2]));