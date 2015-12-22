function lengthOfLastWord(input){
	var len = input.length;

	var flag = false;
	var result = 0;

	for(var i=len-1;i>=0;i--){
		var c = input[i];
		if((c>='a' && c<='z') || (c>='A' && c<='Z')){
			flag = true;
			result++;
		}
		else{
			if(flag){
				return result;
			}
		}
	}
};


var lastword = lengthOfLastWord("i love dogs  ");

console.log(lastword);