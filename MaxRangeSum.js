var readLine = require('readline');

process.stdin.setEncoding('utf8');


var rl = readLine.createInterface({
          input: process.stdin,
          terminal: false
        });
rl.on('line', readline);

function readline(line){
	var arr = [];
	if (line !== "\n") {
     	var l = line.toString().split(' ');
        var n = l.length;
	    for(var k =0; k<n; k++){
	      arr.push(parseInt(l[k],10));
	    	}
	}
	console.log(maxSum(arr));
	process.exit();
	return 0;
 }

function maxSum(arr) {

    var max_till_now =0;
    var max_ending_here = 0;
    var len = arr.length;

    for (let i=0; i<len; i++){
    	max_ending_here = max_ending_here+arr[i];
    	if(max_ending_here<0){
    		max_ending_here = 0;
    	}
    	if(max_till_now < max_ending_here)
            max_till_now = max_ending_here
    }


    return max_till_now;
}


