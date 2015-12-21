var STACK = require('../Javascript-and-Data-Structure/DataStructure/Stack')

function isValidExpression(s){
	var map = {};
	map["("] = ")";
	map["{"] = "}";
	map["["] = "]";

	var stack = new STACK();
	console.log(stack);

	for(var i=0;i<s.length;i++){
		if(Object.keys(map).indexOf(s[i])>-1){
			stack.push(s[i]);
		}
		else if(Object.keys(map).map(function(key){return map[key]}).indexOf(s[i])>-1){
			if(!stack.isEmpty() && map[stack.peek()] == s[i]){
				stack.pop();
			}
			else{
				return false;
			}
		}
	}
	return stack.isEmpty();
}

console.log(isValidExpression("[{()}]"));