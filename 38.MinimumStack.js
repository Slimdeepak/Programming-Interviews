/*

MINSTACK
Implement a STACK which has constant time push, pop, top and findMinimum() .

DeepakKumar.
*/

var STACK = (function(){

	//A constructor for Node.
	function Node(val){
		this.val = val;
		this.min = Number.MIN_VALUE;
		this.next;
	};
	//We need to store min value in every node.So as to get constant min value at any time.

	//top of the stack.
	var top;
	var N=0;

	var push = function(item){
		
		N++;

		if(top==undefined){
			top = new Node(item);
			top.min = item;
		}
		else{
			var newNode = new Node(item);
			newNode.min = Math.min(top.min,item);
			newNode.next = top;
			top = newNode;
		}
	};

	var pop = function(){
		N--;
		var item = null;
		if(!isEmpty()){
			item = top.val;
			top = top.next;
			return item;
		}
		return item;
	};

	var isEmpty = function(){
		return N==0;
	};

	var getMin = function(){
		return top.min;
	};

	var displayStack = function(){
		var temp = top;
		while(temp!=undefined){
			console.log(temp.val +" - "+temp.min);
			temp = temp.next;
		}
	}

	return{
		push:push,
		pop:pop,
		getMin:getMin,
		display:displayStack
	}
})();

var stack = STACK;
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(1);
stack.push(5);
stack.push(6);
console.log(stack.getMin());
stack.display();