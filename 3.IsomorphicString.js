/*
Two strings are isomorphic if the characters in string1
can be replaced to get string2.
*/


function isomorphicString(str1,str2){
	
	if(str1==undefined || str2==undefined){
		return false;
	}
	
	if(str1.length != str2.length){
		return false;
	}

	if(str1.length==0 && str2.length==0){
		return true;
	}

	var map = {};

	for(var i=0; i<str1.length; i++){

		var c1 = str1[i];
		var c2 = str2[i];

		var key = getKey(map,c2);

		if(key!=undefined && key!=c1){
			return false;
		}

		else if(map[c1]!=undefined){
			if(map[c1]!=c2)
			return false;
		}
		
		else{
			map[c1] = c2;
		}
	}

	return true;
};


function getKey(map,value){
	var keys = Object.keys(map);
	for(var i=0;i<keys.length;i++){
		if(map[keys[i]] == value){
			return keys[i];
		}
	}
};


console.log(isomorphicString("egg","add"));