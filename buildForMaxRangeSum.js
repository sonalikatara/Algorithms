(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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



},{"readline":undefined}]},{},[1]);
