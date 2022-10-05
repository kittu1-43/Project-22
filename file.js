//------------ Area of triangle---------------------

let a=5;
let b=6;
let c=7;

let s=(a+b+c)/2;
area=Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log("Area of triangle is "+area);


//--------------To get extension of a file name---------------

var filename="Hey.js";
console.log(filename.split('.').pop());

var filename="Hello.php"
console.log(filename.split('.').pop());



//-------------Sum of two given number and if two no are same then return triple sum---------


var num1=5;
var num2=5;
if(num1!=num2){
    sum=num1+num2;
}
else{
    sum=num1*3;
}
console.log(sum);
