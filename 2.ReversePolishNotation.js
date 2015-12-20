//((2+1)*3) = 9;
var STACK = require('../javascript-and-Data-Structure/DataStructure/Stack');

function reversePolishNotation(str){
	var operator = "+-*/";
	var stack = new STACK();

	for(var i=0;i<str.length;i++){
		if(operator.indexOf(str[i])<0){
			stack.push(str[i]);
		}
		else{
			var operand1 = stack.pop();
			var operand2 = stack.pop();

			var index = operator.indexOf(str[i]);
			//console.log(index+""+operand1+""+operand2);

			switch(index){
				case 0: stack.push(Math.floor(operand1)+Math.floor(operand2));
						break;
				case 1: stack.push(operand1-operand2);
						break;
				case 2: stack.push(Math.floor(operand1*operand2));
						break;
				case 3: stack.push(Math.floor(operand1/operand2));
						break;
				default : console.log("Why have you come here??");
						break;
			}
		}
	}

	console.log(stack.pop());
	
};

reversePolishNotation("12-3/");