var interval = [[3,6],[5,9],[8,15],[1,2]];

var setOfInterval = [];

for(var i=0;i<interval.length;i++){
	setOfInterval.push(new Interval(interval[i][0],interval[i][1]));
}

mergeInterval(setOfInterval);

function Interval(start,end){
	this.start = start;
	this.end = end;
}

function mergeInterval(intervals){
	
	intervals.sort(function(a,b){
		if(a.start<b.start){
			return -1;
		}
		else if(a.start>b.start){
			return +1;
		}
		else{
			return 0;
		}
	});

	var result = [];	
	var prev = intervals[0];

	for(var i=0;i<intervals.length;i++){
		var current = intervals[i];

		if(current.start<=prev.end){
			var merged = new Interval(prev.start,current.end); 
			prev = merged;
		}
		else{
			result.push(prev);
			prev = current;
		}
	}

	result.push(prev);
	console.log(result);
};