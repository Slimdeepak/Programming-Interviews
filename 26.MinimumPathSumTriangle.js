/*
For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]


The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

function minimumPathSumTriangle(matrix){
	var len = matrix.length - 1;
	var sum = 0;
	var total = [];

	for(var i=0;i<matrix[len].length;i++){
		total[i] = matrix[len][i];
	}

	console.log(total);

	for(var i = matrix.length-2; i>=0; i--){
		
		for(var j=0;j<matrix[i+1].length-1;j++){
			
			total[j] = matrix[i][j] + Math.min(total[j],total[j+1]); 
		
		}
	}

	console.log(total[0]);
}

var matrix = [[2],[3,4],[6,5,7],[4,1,8,3]];

minimumPathSumTriangle(matrix);