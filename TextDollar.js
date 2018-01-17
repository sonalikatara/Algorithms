let readLine = require('readline');

process.stdin.setEncoding('utf8');


let rl = readLine.createInterface({
          input: process.stdin,
          terminal: false
        });
rl.on('line', readline);

function readline(line){
	let arr = [];
    let sales = 0;
	if (line !== "\n") {
     	 sales = parseInt(line.toString().split(" ")[0],10);
	}
	console.log(numToText(sales)+"Dollars");
	process.exit();
	return 0;
 }

function numToText(num) {

    let result = "";
    let place, numInPlace, numRemaining, strRemaining;
    let numToWord = {
            0 : 'Zero',
            1 : 'One',
            2 : 'Two',
            3 : 'Three',
            4 : 'Four',
            5 : 'Five',
            6 : 'Six',
            7 : 'Seven',
            8 : 'Eight',
            9 : 'Nine',
            10 : 'Ten',
            11 : 'Eleven',
            12 : 'Twelve',
            13 : 'Thirteen',
            14 : 'Fourteen',
            15 : 'Fifteen',
            16 : 'Sixteen',
            17 : 'Seventeen',
            18 : 'Eighteen',
            19 : 'Nineteen',
            20 : 'Twenty',
            30 : 'Thirty',
            40 : 'Forty',
            50 : 'Fifty',
            60 : 'Sixty',
            70 : 'Seventy',
            80 : 'Eighty',
            90 : 'Ninety'
        };

        let numToPlace = {
            100 : 'Hundred',
            1000 : 'Thousand',
            1000000 : 'Million'
        };

    if(numToWord[num]){
        result = numToWord[num];
    } else if(numToPlace[num]){
        result = numToPlace[num];
    } else if(num<100){
        numInPlace = Math.floor(num/10);
        numRemaining = num % 10;
        result = numToWord[numInPlace*10] + numToText(numRemaining);
    } else {
        if (num < 1000) {
            place = 100;
        } else if (num < 1000000) {
            place = 1000;
        } else if (num < 1000000000) {
            place = 1000000;
        }
        numInPlace = Math.floor(num/place);
        numRemaining = num % place;
        result = numToText(numInPlace) + numToPlace[place];
        strRemaining = numToText(numRemaining);
        if (strRemaining !== 'Zero') {
            result += strRemaining;
        }
    }


    return result;
}


