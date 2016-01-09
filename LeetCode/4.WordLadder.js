
function LadderLength(start,end,dict){
	if(dict.length==0){
		return 0;
	}

	dict.push(end);

	var wordQueue = []; //String
	var distanceQueue = []; //Integer

	wordQueue.push(start);
	distanceQueue.push(1);

	var result = Number.MAX_VALUE;

	while(wordQueue.length!=0){

		var currentword = wordQueue.shift();
		var currentdistance = distanceQueue.shift();

		if(currentword==end){
			result = Math.min(result, currentdistance);
		}

		for(var i=0;i<currentword.length;i++){
			
			var arr = currentword.split("");
			for(var j=0;j<26;j++){
				
				arr[i] = String.fromCharCode(j+97);
				var newword = arr.join("");
	
				if(dict.indexOf(newword)>-1){
					
					wordQueue.unshift(newword);
					distanceQueue.unshift(currentdistance+1);
					dict.splice(dict.indexOf(newword),1);
				
				}
			}
		}
	}

	if(result<Number.MAX_VALUE){
		return result;
	}
	else{
		return 0;
	}
};

console.log("Minimum steps are"+LadderLength("hit","cog",["hot","dot","dog","lot","log"]));