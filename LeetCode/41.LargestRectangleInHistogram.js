var STACK =require('../Javascript-and-Data-Structure/DataStructure/Stack');
/*
Add to stack if current value > top
Otherwise keep removing from stack till a number which is smaller or equal than current is found.
Calculate every time you remove
if(stack.isEmpty()){
	area = input[top]*i;
}
else{
	area = input[top]*(i-stack.top-1);
}

*/

function maxHistogramArea(input){
	var stack = new STACK();
	var maxArea = 0;
	var area = 0;
	var i;

	for(i=0;i<input.length;){
		if(stack.isEmpty() || input[stack.peek()]<=input[i]){
			stack.push(i++);
		}
		else{
			var top = stack.pop();
			if(stack.isEmpty()){
				area = input[top]*i;
			}
			else{
				area = input[top]*(i-stack.peek()-1);
			}
			if(area>maxArea){
				maxArea = area;
			}
		}
	}

	while(!stack.isEmpty()){
		var top = stack.pop();
		if(stack.isEmpty()){
			area = input[top]*i;
		}
		else{
			area = input[top]*(i-stack.peek()-1);
		}

		if(area>maxArea){
			maxArea = area;
		}
	}
	return maxArea;
}

console.log(maxHistogramArea([2,2,2,6,1,5,4,2,2,2,2]));