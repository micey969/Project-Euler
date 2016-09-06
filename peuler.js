//Jquery for web page

//generate sum
function multiple(num){
	var num1 = 3;
	var num2 = 5;
	var i, sum = 0;

	for(i=0; i< num;i++){
		if ((i%num1===0) || (i%num2===0)){
			sum+=i;
		}
	}
	return sum;
};


//generates Fibonacci terms
function Fibonacci(num){	
	if (num===0){return 0;}
	if (num===1){return 1;}
	if (num===2){return 2;}
	return Fibonacci(num-1) + Fibonacci(num-2);
 };
 
 //calculates the sum of the even terms
function Fib(num){
	var i = 2;
	var sum = 0;
	var term = Fibonacci(i);
	while(term<=num){
		if(term%2===0){
			sum+=term;
		}
		i++;
		term = Fibonacci(i);
	}
	return sum;
};

//returns the largest prime factor
function PrimeFac(num){
	var j = 0;
	var i = 2;
	var currNum = num;
	var pfs = [];

	while((currNum!==1)&&(i<=num)){
		if(num%i===0){
			pfs[j++] = i;
			num/=i;
			currNum = num;
		}
		else{
			i++;
		}
	}
    return Math.max.apply(Math,pfs)
};


$(document).ready(function(){

	//multiples solution
	$("#multiples").click(function(){
		var value = multiple($("#mInput").val());
		alert ("The answer is: " + value);
	});

	//Fibonacci Sequence
	$("#fibonacci").click(function(){
		var value = Fib($("#fInput").val());
		console.log($("#fInput").val());
		alert ("The answer is: " + value);
	});
	
	//The largest prime factor
	$("#prime").click(function(){
		var value = PrimeFac($("#pInput").val());
		console.log($("#pfInput").val());
		alert ("The answer is: " + value);
	});
});






